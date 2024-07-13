import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-nav">
      <li className="nav-item"><Link to="/">Home</Link></li>
      <li className="nav-item"><Link to="/bmi">Profile</Link></li>
      <li className="nav-item"><Link to="/leaderboard">Leaderboard</Link></li>
      <li className="nav-item"><Link to="/">Logout</Link></li>
    </ul>
  </nav>
);

export default Navbar;
