import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const phrases = ["Welcome to Wellness Hub!"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(prevLoopNum => (prevLoopNum + 1) % phrases.length);
      }
    };

    const typingSpeed = isDeleting ? 30 : 150; 
    const typingInterval = setInterval(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text, isDeleting, loopNum]);

  return (
    <div className="home-container">
      <div className="home-content">
        <h1><span className="typing-text">{text}</span><span className="cursor"></span></h1>
        <p>Urging you to stay healthy</p>
      </div>
      <div className="home-image">
        <img src="./hero.png" alt="Home" />
      </div>
    </div>
  );
};

export default Home;
