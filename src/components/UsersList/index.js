import React from 'react';
import { UserSection, UserDetails } from './UsersList.styled';
import Button from 'components/Button';

const UsersList = ({ users, getRecieverId }) => (
  <UserSection>
    {users.map(document => {
      const { id, data: { photoURL = '', displayName = '' } = {} } = document;

      return (<UserDetails key={id}>
        <Button className="bg-white text-dark" onClick={() => getRecieverId(id)}>
          <p>{id}</p>
          <img src={photoURL} alt={displayName.substring(0, 5)} />
          <h4>{displayName.substring(0, 10)}</h4>
        </Button>
      </UserDetails>)
    })}
  </UserSection>
);

export default UsersList;