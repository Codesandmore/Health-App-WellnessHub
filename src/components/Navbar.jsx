import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-nav">
      <li className="nav-item"><Link to="/form">Details</Link></li>
      <li className="nav-item"><Link to="/bmi">BMI</Link></li>
      <li className="nav-item"><Link to="/leaderboard">Leaderboard</Link></li>
    </ul>
  </nav>
);

export default Navbar;
