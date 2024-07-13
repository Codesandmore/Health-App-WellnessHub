import React, { useState } from 'react';
import './BMI.css';

const BMI = ({ formData, calories }) => {
  const { gender, age, height, weight } = formData;
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  const [foods, setFoods] = useState([]);
  const [foodItem, setFoodItem] = useState('');
  const [caloriesConsumed, setCaloriesConsumed] = useState(0);
  const calorieCountPerItem = 100; // Default calorie count for each item

  const addFood = () => {
    if (foodItem.trim() !== '') {
      setFoods([...foods, { name: foodItem, calories: calorieCountPerItem }]);
      setCaloriesConsumed(caloriesConsumed + calorieCountPerItem);
      setFoodItem('');
    }
  };

  const handleFoodItemChange = (e) => {
    setFoodItem(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission if inside a form
      addFood();
    }
  };

  const handleDone = () => {
    if (caloriesConsumed >= calories) {
      alert('Good job!');
    } else {
      alert('Do better');
    }
  };

  const removeFood = (index) => {
    const removedFood = foods[index];
    setFoods(foods.filter((_, i) => i !== index));
    setCaloriesConsumed(caloriesConsumed - removedFood.calories);
  };

  return (
    <div className="bmi-container">
      <div className="details-section">
        <h2>BMI Calculator</h2>
        <p>Gender: {gender}</p>
        <p>Age: {age}</p>
        <p>Height: {height} cm</p>
        <p>Weight: {weight} kg</p>
      </div>
      <div className="bmi-result">
        <h2>BMI</h2>
        <p>Your BMI is: {bmi}</p>
        <h2>Today's Calorie Consumption</h2>
        <p>{calories} kcal</p>
      </div>
      <div className="food-list">
        <h2>Food List</h2>
        <div className="input-container">
          <input
            type="text"
            value={foodItem}
            onChange={handleFoodItemChange}
            onKeyDown={handleKeyDown} // Add this line
            placeholder="Add a new food item"
          />
          <button onClick={addFood}>Add</button>
        </div>
        <ul>
          {foods.map((food, index) => (
            <li key={index}>
              {food.name} ({food.calories} kcal)
              <button className="remove-button" onClick={() => removeFood(index)}>&times;</button>
            </li>
          ))}
        </ul>
        <button onClick={handleDone}>Done</button>
      </div>
    </div>
  );
};

export default BMI;
