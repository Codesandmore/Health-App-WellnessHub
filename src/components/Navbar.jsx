import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Login</Link></li>
      <li><Link to="/form">Form Input</Link></li>
      <li><Link to="/bmi">BMI</Link></li>
      <li><Link to="/leaderboard">Leaderboard</Link></li>
    </ul>
  </nav>
);

export default Navbar;