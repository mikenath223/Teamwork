import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUsersData,
  saveUsers
} from 'store/slices/usersListSlice'
import { Wrapper } from './Chats.styled';
import { getUsers } from 'utils/request';
import UsersList from 'components/UsersList';


const Chats = () => {
  const dispatch = useDispatch();
  const usersData = useSelector(selectUsersData);

  const retrieveUsers = useCallback(async () => {
    const users = await getUsers();
    dispatch(saveUsers(users));
  }, [dispatch]);

  useEffect(() => {
    if (usersData.length === 0) {
      retrieveUsers();
    }
  }, [retrieveUsers, usersData.length])


  return (
    <Wrapper>
      <UsersList users={usersData} />
    </Wrapper>
  )
}

export default Chats;