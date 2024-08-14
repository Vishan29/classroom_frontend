import React, { useState } from 'react';
import axios from 'axios'; // or your preferred API library
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Teacher'); // Default role, can be changed based on requirements
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/register', { email, password, role });
      // Handle successful registration, e.g., redirect to login page
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration error, e.g., display error message
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
