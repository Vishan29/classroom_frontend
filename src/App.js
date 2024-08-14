import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/Common/Navbar';
import Dashboard from './components/Dashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/api/users/me');
        setUser(response.data);
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = () => {
    // Implement logout logic (e.g., clear token, redirect to login)
    setUser(null);
  };

  return (
    <Router>
      <div className="app">
        {user && <Navbar userRole={user.role} onLogout={handleLogout} />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" replace />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
