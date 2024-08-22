import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const UserCard = ({ user }) => {
  return (
    <CardWrapper>
      <img src={user.avatar} alt="User Avatar" style={{ borderRadius: '50%', width: '100px' }} />
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Location: {user.location}</p>
    </CardWrapper>
  );
};

export default UserCard;
