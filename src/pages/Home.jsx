import React from 'react';
import './Home.css';

const Home = () => (
  <div className="home-container">
    <div className="home-content">
      <h1>Welcome to Pixel Pirates</h1>
      <p>This is the home page.</p>
    </div>
    <div className="home-image">
      <img src="./hero.png" alt="Home" />
    </div>
  </div>
);

export default Home;
