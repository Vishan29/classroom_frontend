import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Assuming you're using Redux for state management

import Navbar from './components/Common/Navbar';
import Sidebar from './components/Common/Sidebar';
import PrincipalDashboard from './components/Dashboard/PrincipalDashboard';
import TeacherDashboard from './components/Dashboard/TeacherDashboard';
import StudentDashboard from './components/Dashboard/StudentDashboard';

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div className="dashboard-container">
      <Navbar userRole={user?.role} />
      <Sidebar userRole={user?.role} />
      <div className="dashboard-content">
        <Routes>
          <Route path="/dashboard/principal" element={<PrincipalDashboard />} />
          <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard" element={<Navigate to={`/dashboard/${user?.role}`} replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
