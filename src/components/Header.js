import React from 'react';
import { FaBell } from 'react-icons/fa';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#fff' }}>
      <h1 style={{ fontSize: '24px', color: '#6A0DAD' }}>PEOPLE.CO</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaBell style={{ marginRight: '20px', cursor: 'pointer' }} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://via.placeholder.com/40" alt="User Avatar" style={{ borderRadius: '50%', marginRight: '10px' }} />
          <span>Jane Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
