import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div className="welcome-container">
      <motion.h1 
        className="welcome-title"
        whileHover={{ scale: 1.1, color: '#00bcd4' }}
        transition={{ duration: 0.3 }}
      >
        WELCOME
      </motion.h1>

      <motion.p 
        className="welcome-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Analyse your reports
      </motion.p>

      <motion.button 
        className="get-started-btn"
        whileHover={{ scale: 1.1, borderRadius: "15px", backgroundColor: "#00bcd4" }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
      >
        GET STARTED
      </motion.button>
    </div>
  );
};

export default Welcome;