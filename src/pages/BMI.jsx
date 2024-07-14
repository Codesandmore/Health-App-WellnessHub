import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BMI.css';

const BMI = ({ formData }) => {
  const { gender, age, height, weight } = formData;
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  const [foods, setFoods] = useState([]);
  const [foodItem, setFoodItem] = useState('');
  const [caloriesConsumed, setCaloriesConsumed] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null); // To manage the delay timeout
  const [isLoading, setIsLoading] = useState(false); // To show spinner during delay

  const navigate = useNavigate();

  const generateRandomCalories = () => {
    return Math.floor(Math.random() * (200 - 50 + 1)) + 50;
  };

  const addFood = () => {
    if (foodItem.trim() !== '') {
      const calorieCountPerItem = generateRandomCalories();
      
      setIsLoading(true); // Show spinner
      
      // Set a new timeout for updating calories and displaying the food item
      const id = setTimeout(() => {
        setFoods([...foods, { name: foodItem, calories: calorieCountPerItem }]);
        setCaloriesConsumed(caloriesConsumed + calorieCountPerItem);
        setFoodItem('');
        setIsLoading(false); // Hide spinner
      }, 6000); // 6000ms = 6 seconds

      setTimeoutId(id); // Save timeout ID to clear it later if needed
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
    const totalCalories = foods.reduce((total, food) => total + food.calories, 0);
    if (totalCalories >= caloriesConsumed) {
      alert('Good job!');
    } else {
      alert('Do better');
    }
    navigate('/leaderboard'); // Navigate to Leaderboard page
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
        <p>{caloriesConsumed} kcal</p>
      </div>
      <div className="food-list">
        <h2>Enter what you ate today</h2>
        <div className="input-container">
          <input
            type="text"
            value={foodItem}
            onChange={handleFoodItemChange}
            onKeyDown={handleKeyDown}
            placeholder="Add a new food item"
          />
          <button onClick={addFood} disabled={isLoading}>Add</button>
          {isLoading && <div className="loading-spinner"></div>} {/* Show spinner */}
        </div>
        <ul>
          {foods.map((food, index) => (
            <li key={index}>
              {food.name} ({food.calories} kcal)
              <button className="remove-button" onClick={() => removeFood(index)}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="done">
        <button onClick={handleDone}>Done</button>
      </div>
    </div>
  );
};

export default BMI;
