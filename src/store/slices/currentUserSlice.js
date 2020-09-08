import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'currentUser',
  initialState: {
    userDetails: {},
  },
  reducers: {
    setUser: (_state, action) => ({
      userDetails: { ...action.payload }
    }),
  },
});

export const { setUser } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCurrentUser = state => state.currentUser.userDetails;

export default userSlice.reducer;
