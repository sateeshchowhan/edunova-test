import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserCard from '../components/UserCard';
import axios from 'axios';

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from an API
    axios.get(`/api/users/${id}`).then(response => {
      setUser(response.data);
    });
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <UserCard user={user} />
    </div>
  );
};

export default UserProfile;
