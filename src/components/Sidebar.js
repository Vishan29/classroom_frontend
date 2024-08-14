import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard/home">Home</Link>
        </li>
        <li>
          <Link to="/dashboard/profile">Profile</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}

export default Sidebar;
