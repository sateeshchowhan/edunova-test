import React from 'react';
import { FaHome, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={{ width: '200px', background: '#f8f9fa', padding: '20px', position: 'fixed', height: '100vh' }}>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', padding: '10px 0', textDecoration: 'none', color: '#333' }}>
              <FaHome style={{ marginRight: '10px' }} />
              Overview
            </Link>
          </li>
          <li>
            <Link to="/users" style={{ display: 'flex', alignItems: 'center', padding: '10px 0', textDecoration: 'none', color: '#333' }}>
              <FaUsers style={{ marginRight: '10px' }} />
              People Directory
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
