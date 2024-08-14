import React, { useState } from 'react';

function ClassroomForm({ onCreate }) {
  const [formData, setFormData] = useState({
    name: '',
    startTime: '',
    endTime: '',
    days: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDaysChange = (day) => {
    const newDays = formData.days.includes(day)
      ? formData.days.filter((d) => d !== day)
      : [...formData.days, day];
    setFormData({ ...formData, days: newDays });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    setFormData({
      name: '',
      startTime: '',
      endTime: '',
      days: [],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />

      <label>Start Time:</label>
      <input type="time" name="startTime" value={formData.startTime} onChange={handleChange} />

      <label>End Time:</label>
      <input type="time" name="endTime" value={formData.endTime} onChange={handleChange} />

      <label>Days:</label>
      <div className="days-checkbox">
        <input type="checkbox" name="monday" value="Monday" checked={formData.days.includes('Monday')} onChange={(e) => handleDaysChange(e.target.value)} /> Monday
        <input type="checkbox" name="tuesday" value="Tuesday" checked={formData.days.includes('Tuesday')} onChange={(e) => handleDaysChange(e.target.value)} /> Tuesday
        <input type="checkbox" name="wednesday" value="Wednesday" checked={formData.days.includes('Wednesday')} onChange={(e) => handleDaysChange(e.target.value)} /> Wednesday
        <input type="checkbox" name="thursday" value="Thursday" checked={formData.days.includes('Thursday')} onChange={(e) => handleDaysChange(e.target.value)} /> Thursday
        <input type="checkbox" name="friday" value="Friday" checked={formData.days.includes('Friday')} onChange={(e) => handleDaysChange(e.target.value)} /> Friday
        <input type="checkbox" name="saturday" value="Saturday" checked={formData.days.includes('Saturday')} onChange={(e) => handleDaysChange(e.target.value)} /> Saturday
      </div>

      <button type="submit">Create Classroom</button>
    </form>
  );
}

export default ClassroomForm;
