import axios from 'axios';

const baseUrl = 'http://localhost:5000/api'; // Replace with your backend API base URL

const fetchClassrooms = async () => {
  try {
    const response = await axios.get(`${baseUrl}/classrooms`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchTeachers = async () => {
  try {
    const response = await axios.get(`${baseUrl}/teachers`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchStudents = async () => {
  try {
    const response = await axios.get(`${baseUrl}/students`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export default {
  fetchClassrooms,
  fetchTeachers,
  fetchStudents,
};
