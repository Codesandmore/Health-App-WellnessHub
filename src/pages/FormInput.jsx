import React, { useState } from 'react';

const FormInput = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    height: '',
    weight: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <div>
      <h2>Form Input</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Gender:
          <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <br />
        <label>
          Height (cm):
          <input type="number" name="height" value={formData.height} onChange={handleChange} />
        </label>
        <br />
        <label>
          Weight (kg):
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormInput;
