import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserTable from '../components/UserTable';
import EditProfileForm from '../components/EditProfileForm';
import Modal from '../components/Modal';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleAddMember = () => {
    // Initialize a new user object for the form
    setCurrentUser({
      name: '',
      email: '',
      role: '',
      status: 'Active',
      teams: [],
      photoUrl: '',
    });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentUser(null);
  };

  const handleSave = (updatedUser) => {
    if (updatedUser.id) {
      // Update existing user
      setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    } else {
      // Add new user with a unique ID
      const newUser = { ...updatedUser, id: users.length + 1 };
      setUsers([...users, newUser]);
    }

    setIsModalOpen(false);
    navigate('/users');
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Team members <span style={{ color: '#6A0DAD' }}>{users.length} users</span></h2>
        <button
          style={{ background: '#6A0DAD', color: '#fff', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
          onClick={handleAddMember}
        >
          + ADD MEMBER
        </button>
      </div>
      <UserTable users={filteredUsers} handleDelete={handleDelete} />

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <EditProfileForm user={currentUser} onSave={handleSave} onCancel={handleModalClose} />
      </Modal>
    </div>
  );
};

export default UserList;
