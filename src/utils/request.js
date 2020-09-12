import { auth, generateUserDocument, fire } from './firebaseConfig';
import db from './firebaseConfig';

/*
/ Util function to signup new user 
/ with email and password
*/
export const createUserWithEmailAndPassword = async (email, password, displayName, setError) => {
  try {
    const { user = {} } = await auth.createUserWithEmailAndPassword(email, password)
    await generateUserDocument(user, { displayName });
  } catch (error) {
    setError(error.message);
  }
};

/*
/ Util function to signIn user 
/ with email and password
*/
export const signInUserWithEmailAndPassword = (email, password, setError) => {
  auth.signInWithEmailAndPassword(email, password).catch(() => {
    setError("Error signing in with password and email!");
  });
}

/*
/ Util function to reset user password
*/
export const resetUserPassword = (email, setEmailHasBeenSent, setError) => {
  auth.sendPasswordResetEmail(email)
    .then(() => {
      setEmailHasBeenSent(true);
    })
    .catch(() => {
      setError("Error resetting password");
    });
}

/*
/ Util function to get users
*/
export const getUsers = async () => {
  try {
    let querySnapshot = [];
    await db.collection('users').get().then(query =>
      query.forEach(doc => querySnapshot.push({ id: doc.id, data: doc.data() })))
    return querySnapshot
  } catch (error) {
    console.log('Failed to retrieve users', JSON.stringify(error));
    throw new Error(error);
  }
};

/*
/ Util function to get chats
*/
export const getChats = async (recieverId, currentUserId, runIt) => {
  try {
    await new Promise(function (resolve) {
      return db.collection("chat").doc(recieverId)
        .onSnapshot(function (doc) {
          const chats = doc.data();
          if (chats.data) {
            const filteredChats = chats.data.filter(item =>
              item.recieverId === currentUserId);
            resolve(runIt(filteredChats));
          };
        });
    })
  } catch (error) {
    console.log('Chat uplink ended', JSON.stringify(error));
    throw new Error(error);
  }
}

/*
/ Util function to send chats
*/
export const sendFirestoreChat = (message, senderId, recieverId) => {
  try {
    db.collection('chat').doc(senderId).get().then((doc) => {
      if (doc.exists) {
        db.collection('chat').doc(senderId).update({
          data: fire.firestore.FieldValue.arrayUnion({
            message, recieverId, date: new Date().toLocaleString()
          })
        });
      } else {
        db.collection('chat').doc(senderId).set({
          data: [{
            message, recieverId, date: new Date().toLocaleString()
          }]
        });
      }
    })
  } catch (error) {
    console.log('Failed to send chat', JSON.stringify(error));
    throw new Error(error);
  }
};

/*
/ Util function to group chats
*/
export const runDispatch = (moment, dispatch, setChats,
  chats = [], count = 0) => (input) => {

    if (count >= 2) {
      count = 0;
      chats = [];
    }
    chats.push(...input);
    if (chats.length) {
      chats = chats.sort((a, b) =>
        new Date(a.date) - new Date(b.date))
      chats = chats.map(item => ({
        date: moment(item.date).fromNow(),
        message: item.message,
        recieverId: item.recieverId
      }));
      dispatch(setChats(chats));
    };
    count += 1;
  };

/*
/ Util function to save meetings
*/
export const sendFirebaseEvent = (event, currentUserId) => {
  db.collection('meetings').doc(currentUserId).get().then((doc) => {
    if (doc.exists) {
      db.collection('meetings').doc(currentUserId).update({
        data: fire.firestore.FieldValue.arrayUnion(event)
      });
    } else {
      db.collection('meetings').doc(currentUserId).set({
        data: [event]
      });
    }
  })
}