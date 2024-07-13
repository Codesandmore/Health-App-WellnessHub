import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated, handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/bmi">Profile</Link></li>
        <li className="nav-item"><Link to="/leaderboard">Leaderboard</Link></li>
        {isAuthenticated ? (
          <li className="nav-item">
            <button className="logout-button" onClick={handleLogoutClick}>Logout</button>
          </li>
        ) : (
          <li className="nav-item">
            <Link to="/form" className="signup-button">Signup</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
