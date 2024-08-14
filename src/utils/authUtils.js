import axios from 'axios';

const baseUrl = 'http://localhost:5000/api'; // Replace with your backend API base URL

const register = async (userData) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const login = async (credentials) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getUserProfile = async () => {
  try {
    const response = await axios.get(`${baseUrl}/users/me`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  register,
  login,
  getUserProfile,
};
