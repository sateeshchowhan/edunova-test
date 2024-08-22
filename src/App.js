import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import UserList from './pages/UserList';
import Dashboard from './pages/Dashboard';
// Import other components here

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <div style={{ marginLeft: '220px', padding: '20px' }}>
        <Routes>
        <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserList />} />
          
          {/* Other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
