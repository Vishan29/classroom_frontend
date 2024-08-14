import React, { useState, useEffect } from 'react';
import axios from 'axios'; // or your preferred API library

function TeacherDashboard() {
  const [assignedClassrooms, setAssignedClassrooms] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch assigned classrooms and students data
    const fetchAssignedClassrooms = async () => {
      try {
        const response = await axios.get('/api/teachers/me/classrooms'); // Assuming an endpoint to fetch teacher's classrooms
        setAssignedClassrooms(response.data);
      } catch (error) {
        console.error('Error fetching assigned classrooms:', error);
      }
    };

    const fetchStudents = async () => {
      // Assuming an endpoint to fetch students of a specific classroom
      try {
        // Fetch students for each classroom
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchAssignedClassrooms();
    fetchStudents();
  }, []);

  return (
    <div className="teacher-dashboard">
      <h1>Teacher Dashboard</h1>
      <button onClick={() => setShowCreateForm(!showCreateForm)}>
        {showCreateForm ? 'Close Form' : 'Create Classroom'}
      </button>
      {showCreateForm && <ClassroomForm onCreate={handleCreateClassroom} />}
      <div className="classrooms-list">
        {assignedClassrooms.map((classroom) => (
          <ClassroomCard
            key={classroom._id}
            classroom={classroom}
            userRole="Teacher"
            handleEdit={(updatedData) => handleUpdateClassroom(classroom._id, updatedData)}
            handleDelete={() => handleDeleteClassroom(classroom._id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TeacherDashboard;