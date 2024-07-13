import React from 'react';

const BMI = ({ formData, calories }) => {
  const { height, weight } = formData;
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  return (
    <div>
      <h2>BMI</h2>
      <p>Your BMI is: {bmi}</p>
      <h2>Today's Calorie Consumption</h2>
      <p>{calories} kcal</p>
    </div>
  );
};

export default BMI;
