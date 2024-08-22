import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const UserTable = ({ users, handleDelete }) => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ background: '#f1f1f1', textAlign: 'left' }}>
            <th style={{ padding: '10px' }}>Name</th>
            <th style={{ padding: '10px' }}>Status</th>
            <th style={{ padding: '10px' }}>Role</th>
            <th style={{ padding: '10px' }}>Email address</th>
            <th style={{ padding: '10px' }}>Teams</th>
            <th style={{ padding: '10px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px' }}>
                <img src={user.avatar} alt={user.name} style={{ borderRadius: '50%', width: '40px', marginRight: '10px', verticalAlign: 'middle' }} />
                {user.name}
              </td>
              <td style={{ padding: '10px' }}>
                <span style={{ color: user.status === 'Active' ? 'green' : 'red' }}>{user.status}</span>
              </td>
              <td style={{ padding: '10px' }}>{user.role}</td>
              <td style={{ padding: '10px' }}>{user.email}</td>
              <td style={{ padding: '10px' }}>
                {user.teams.map((team, index) => (
                  <span key={index} style={{ background: '#f1f1f1', padding: '2px 5px', marginRight: '5px', borderRadius: '5px' }}>{team}</span>
                ))}
              </td>
              <td style={{ padding: '10px' }}>
                <Link to={`/users/edit/${user.id}`} style={{ marginRight: '10px' }}>
                  <FaEdit style={{ color: '#6A0DAD', cursor: 'pointer' }} />
                </Link>
                <FaTrashAlt style={{ color: 'red', cursor: 'pointer' }} onClick={() => handleDelete(user.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
