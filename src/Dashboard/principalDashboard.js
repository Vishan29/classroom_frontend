import React, { useState, useEffect } from 'react';
import axios from 'axios'; // or your preferred API library

function PrincipalDashboard() {
  const [classrooms, setClassrooms] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch classrooms, teachers, and students data from your API
    const fetchClassrooms = async () => {
      try {
        const response = await axios.get('/api/classrooms'); // Replace with your API endpoint
        setClassrooms(response.data);
      } catch (error) {
        console.error('Error fetching classrooms:', error);
      }
    };

    const fetchTeachers = async () => {
      // Replace with your API endpoint for fetching teachers
      try {
        const response = await axios.get('/api/teachers');
        setTeachers(response.data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    const fetchStudents = async () => {
      // Replace with your API endpoint for fetching students
      try {
        const response = await axios.get('/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchClassrooms();
    fetchTeachers();
    fetchStudents();
  }, []);

  const handleCreateClassroom = async () => {
    try {
      const response = await axios.post('/api/classrooms', newClassroomData); // Replace with your API endpoint
      setClassrooms([...classrooms, response.data]);
      setNewClassroomData({
        name: '',
        startTime: '',
        endTime: '',
        days: [],
      });
    } catch (error) {
      console.error('Error creating classroom:', error);
    }
  };

  const handleAssignTeacher = async (classroomId, teacherId) => {
    try {
      const response = await axios.put(`/api/classrooms/${classroomId}/assign-teacher`, { teacherId });
      // Update the classrooms state to reflect the change
    } catch (error) {
      console.error('Error assigning teacher:', error);
    }
  };

  const handleDeleteClassroom = async (classroomId) => {
    try {
      await axios.delete(`/api/classrooms/${classroomId}`);
      setClassrooms(classrooms.filter((classroom) => classroom._id !== classroomId));
    } catch (error) {
      console.error('Error deleting classroom:', error);
    }
  };

  const handleUpdateClassroom = async (classroomId, updatedData) => {
    try {
      const response = await axios.put(`/api/classrooms/${classroomId}`, updatedData);
      const updatedClassrooms = classrooms.map((classroom) =>
        classroom._id === classroomId ? response.data : classroom
      );
      setClassrooms(updatedClassrooms);
    } catch (error) {
      console.error('Error updating classroom:', error);
    }
  };

  return (
    <div className="principal-dashboard">
      <h1>Principal Dashboard</h1>
      <button onClick={() => setShowCreateForm(!showCreateForm)}>
        {showCreateForm ? 'Close Form' : 'Create Classroom'}
      </button>
      {showCreateForm && <ClassroomForm onCreate={handleCreateClassroom} />}
      <div className="classrooms-list">
        {classrooms.map((classroom) => (
          <ClassroomCard
            key={classroom._id}
            classroom={classroom}
            userRole="Principal"
            handleEdit={(updatedData) => handleUpdateClassroom(classroom._id, updatedData)}
            handleDelete={() => handleDeleteClassroom(classroom._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default PrincipalDashboard;
