import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsersData, setUsers } from 'store/slices/usersListSlice';
import { selectChatData, setChats } from 'store/slices/chatSlice'
import { selectCurrentUser } from 'store/slices/currentUserSlice';
import { getUsers, getChats, sendFirestoreChat } from 'utils/request';
import { Wrapper } from './Chats.styled';
import UsersList from 'components/UsersList';
import ChatFrame from 'components/ChatFrame';

const Chats = ({ user }) => {
  const [message, setMessage] = useState('');
  const [recieverId, setRecieverId] = useState('');
  const [sub, setSub] = useState({});

  const dispatch = useDispatch();
  const usersData = useSelector(selectUsersData);
  const chatData = useSelector(selectChatData);
  const currentUser = useSelector(selectCurrentUser);

  const retrieveUsers = useCallback(async () => {
    let users = await getUsers();
    users = users.filter(item => item.id !== user);
    dispatch(setUsers(users));
  }, [dispatch, user]);

  useEffect(() => {
    if (usersData.length === 0 && user) {
      retrieveUsers();
    }

    return () => {
      // if (sub)
      sub.senderSub();
      sub.recieverSub();
    }
  }, [retrieveUsers, usersData.length, user]);

  const handleGetUserChats = async (recieverId) => {
    setRecieverId(recieverId);
    if (sub.recieverSub || sub.senderSub) {
      sub.senderSub();
      sub.recieverSub();
    }
    const runDispatch = () => {
      let chats = [], count = 0

      return {
        loadChat: (input) => {
          if (count >= 2) {
            count = 0;
            chats = [];
          }
          if (chats.length) {
            chats.push(...input);
            chats = chats.sort((a, b) => a.date - b.date)
            dispatch(setChats(chats));
          } else {
            chats.push(...input);
          }
          count += 1;
        }
      }
    };
    const runIt = runDispatch();
    let { sub: recieverSub } = await getChats(recieverId, user, runIt);
    let { sub: senderSub } = await getChats(user, recieverId, runIt);
    setSub({ senderSub, recieverSub });
  }

  const handleSendUserChat = () => {
    if (message && recieverId) {
      console.log('SendChat', message, user, recieverId);
      sendFirestoreChat(message, user, recieverId);
      setMessage('');
    }
  };

  const handleChange = (event) => {
    const { target: { value } } = event;
    setMessage(value);
  }

  return (
    <Wrapper>
      <UsersList
        users={usersData}
        getUserChats={handleGetUserChats} />
      <ChatFrame
        chats={chatData}
        handleSendChat={handleSendUserChat}
        inputMessage={message}
        currentUserId={user}
        handleChange={handleChange} />
    </Wrapper>
  )
}

export default Chats;