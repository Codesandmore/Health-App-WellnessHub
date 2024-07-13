import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import FormInput from './pages/FormInput.jsx';
import BMI from './pages/BMI.jsx';
import Leaderboard from './pages/Leaderboard.jsx';

const App = () => {
  const [formData, setFormData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleFormSubmit = (data, navigate) => {
    setFormData(data);
    setIsAuthenticated(true);
    navigate('/bmi');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setFormData({});
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <section className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<FormWrapper handleFormSubmit={handleFormSubmit} />} />
          <Route path="/bmi" element={<BMI formData={formData} />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </section>
      <Footer />
    </Router>
  );
};

const FormWrapper = ({ handleFormSubmit }) => {
  const navigate = useNavigate();
  
  const onFormSubmit = (data) => {
    handleFormSubmit(data, navigate);
  };

  return <FormInput onFormSubmit={onFormSubmit} />;
};

export default App;
