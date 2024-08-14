import React, { useState } from 'react';
import axios from 'axios'; // or your preferred API library

function ClassroomCard({ classroom, userRole, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedClassroomData, setEditedClassroomData] = useState({ ...classroom });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = async () => {
    try {
      // Send updated classroom data to backend
      const response = await axios.put(`/api/classrooms/${classroom._id}`, editedClassroomData);
      onEdit(response.data); // Update parent component with updated data
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating classroom:', error);
      // Handle error, e.g., display error message
    }
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`/api/classrooms/${classroom._id}`);
      onDelete(classroom._id); // Notify parent component of deletion
    } catch (error) {
      console.error('Error deleting classroom:', error);
      // Handle error, e.g., display error message
    }
  };

  return (
    <div className="classroom-card">
      <h3>{classroom.name}</h3>
      <p>Start time: {classroom.startTime}</p>
      <p>End time: {classroom.endTime}</p>
      <p>Number of students: {classroom.students.length}</p>
      {isEditing ? (
        <div className="edit-form">
          {/* Edit form for classroom details */}
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="card-actions">
          {userRole === 'Principal' || userRole === 'Teacher' ? (
            <button onClick={handleEditClick}>Edit</button>
          ) : null}
          {userRole === 'Principal' ? (
            <button onClick={handleDeleteClick}>Delete</button>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default ClassroomCard;
