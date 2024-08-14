import React, { useState, useEffect } from 'react';
import axios from 'axios'; // or your preferred API library

function StudentDashboard() {
  const [enrolledClassrooms, setEnrolledClassrooms] = useState([]);

  useEffect(() => {
    // Fetch enrolled classrooms for the current student
    const fetchEnrolledClassrooms = async () => {
      try {
        const response = await axios.get('/api/students/me/classrooms'); // Assuming an endpoint to fetch enrolled classrooms
        setEnrolledClassrooms(response.data);
      } catch (error) {
        console.error('Error fetching enrolled classrooms:', error);
      }
    };

    fetchEnrolledClassrooms();
  }, []);

  return (
    <div className="student-dashboard">
      <h1>Student Dashboard</h1>
      <div className="classrooms-list">
        {enrolledClassrooms.map((classroom) => (
          <div key={classroom._id} className="classroom-card">
            <h2>{classroom.name}</h2>
            {/* Display classroom details, timetable, assignments, etc. */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;
