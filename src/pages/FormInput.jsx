import React, { useState } from 'react';
import './FormInput.css'; // Import the CSS file

const FormInput = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    height: '',
    weight: ''
  });
  const [loading, setLoading] = useState(false); // New state for loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Show loading spinner
    onFormSubmit(formData); // Pass the data to the handler
  };

  return (
    <div className="form-container">
      <div className="card">
        <h2>Enter your current biometerics</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Gender:</span>
            <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
          </label>
          <label>
            <span>Age:</span>
            <input type="number" name="age" value={formData.age} onChange={handleChange} />
          </label>
          <label>
            <span>Height (cm):</span>
            <input type="number" name="height" value={formData.height} onChange={handleChange} />
          </label>
          <label>
            <span>Weight (kg):</span>
            <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
        {loading && <div className="loading-spinner"></div>} {/* Loading spinner */}
      </div>
    </div>
  );
};

export default FormInput;
