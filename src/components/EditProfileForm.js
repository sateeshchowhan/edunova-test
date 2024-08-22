import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditProfileForm = ({ user, onSave, onCancel }) => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    role: '',
    status: 'Active',
    teams: [],
  });
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (user) {
      console.log("User received in EditProfileForm:", user); // Check if user object is received
      if (!user.id) {
        console.error("User ID is missing");
      }
      setProfileData({
        name: user.name || '',
        email: user.email || '',
        role: user.role || '',
        status: user.status || 'Active',
        teams: user.teams || [],
      });
    }
  }, [user]);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!user || !user.id) {
      console.error('User ID is missing or user object is not defined');
      return; // Prevent the form from being submitted
    }
  
    const formData = new FormData();
    formData.append('photo', selectedFile);
    formData.append('name', profileData.name);
    formData.append('email', profileData.email);
    formData.append('role', profileData.role);
    formData.append('status', profileData.status);
    formData.append('teams', JSON.stringify(profileData.teams));
  
    axios
      .put(`http://localhost:5000/api/users/${user.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        onSave(response.data);
      })
      .catch((error) => {
        console.error(
          'There was an error updating the profile!',
          error.response ? error.response.data : error.message
        );
      });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <img src={user.photoUrl || 'default-profile.png'} alt="Profile" />
        <input type="file" onChange={handleFileChange} />
        <button type="button" onClick={() => setSelectedFile(null)}>
          Remove Photo
        </button>
      </div>
      <div>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Role
          <input
            type="text"
            name="role"
            value={profileData.role}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Status
          <select
            name="status"
            value={profileData.status}
            onChange={handleInputChange}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Teams
          <input
            type="text"
            name="teams"
            value={profileData.teams.join(', ')}
            onChange={(e) =>
              setProfileData({
                ...profileData,
                teams: e.target.value.split(',').map((team) => team.trim()),
              })
            }
          />
        </label>
      </div>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditProfileForm;
