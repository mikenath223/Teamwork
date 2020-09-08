import { createSlice } from '@reduxjs/toolkit';

export const usersListSlice = createSlice({
  name: 'usersList',
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (_state, action) => ({
      users: [ ...action.payload ]
    }),
  },
});

export const { setUsers } = usersListSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUsersData = state => state.usersList.users;

export default usersListSlice.reducer;
