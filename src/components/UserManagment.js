import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditProfileForm from './EditProfileForm';

const UserManagement = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleEdit = (user) => {
    console.log('Editing user:', user); // Debug to see if user has a valid id
    setSelectedUser(user);
  };
  
  const handleSave = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
    setSelectedUser(null);
  };

  const handleCancel = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleEdit(user)}>Edit</button>
          </li>
        ))}
      </ul>
      {selectedUser && (
        <EditProfileForm
          user={selectedUser}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default UserManagement;
