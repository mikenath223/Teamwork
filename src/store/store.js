import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './slices/currentUserSlice';
import usersListReducer from './slices/usersListSlice';
import chatDataReducer from './slices/chatSlice';

export default configureStore({
  reducer: {
    // valueInThestore: reducerFromSlice
    chatData: chatDataReducer,
    currentUser: currentUserReducer,
    usersList: usersListReducer,
  },
});
