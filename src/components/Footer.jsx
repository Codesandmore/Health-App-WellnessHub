import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <a href="https://www.fatsecret.com">
      <img src="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret.svg" border="0" alt="Powered by FatSecret"/>
    </a>
    <p>&copy; Pixel Pirates {new Date().getFullYear()}</p>
  </footer>
);

export default Footer;
