import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/Login.jsx';
import FormInput from './pages/FormInput.jsx';
import BMI from './pages/BMI.jsx';
import Leaderboard from './pages/Leaderboard.jsx';

// Create your formData and calories states and functions for handling form submissions and calculations
const App = () => {
  const [formData, setFormData] = useState({});
  const [calories, setCalories] = useState(0);

  const handleFormSubmit = (data) => {
    setFormData(data);
    const calculatedCalories = calculateCalories(data);
    setCalories(calculatedCalories);
  };

  const calculateCalories = (data) => {
    return 2000; // Placeholder for actual calorie calculation logic
  };

  return (
    <Router>
      <Navbar />
      <section className="main">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/form"
            element={<FormInput onFormSubmit={handleFormSubmit} />}
          />
          <Route
            path="/bmi"
            element={<BMI formData={formData} calories={calories} />}
          />
          <Route path="/leaderboard" element={<Leaderboard />} />
          {/* Redirect to "/" if no route matches */}
          <Route path="*" element={<Login />} />
        </Routes>
      </section>
      <Footer />
    </Router>
  );
};

export default App;
