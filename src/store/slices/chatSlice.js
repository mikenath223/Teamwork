import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chatData',
  initialState: {
    chats: [],
  },
  reducers: {
    setChats: (_state, action) => ({
      chats: [ ...action.payload ]
    }),
  },
});

export const { setChats } = chatSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectChatData = state => state.chatData.chats;

export default chatSlice.reducer;
