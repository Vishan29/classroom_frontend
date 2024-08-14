import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ userRole }) {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        {userRole === 'Principal' && (
          <li>
            <Link to="/dashboard/principal">Principal Dashboard</Link>
          </li>
        )}
        {userRole === 'Teacher' && (
          <li>
            <Link to="/dashboard/teacher">Teacher Dashboard</Link>
          </li>
        )}
        {userRole === 'Student' && (
          <li>
            <Link to="/dashboard/student">Student Dashboard</Link>
          </li>
        )}
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
