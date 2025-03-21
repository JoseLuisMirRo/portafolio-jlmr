import React from 'react';
import { Button } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggleButton = ({ isDarkMode, toggleTheme }) => (
  <Button 
    variant={isDarkMode ? "outline-light" : "outline-dark"} 
    onClick={toggleTheme} 
    style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      borderRadius: '20%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {isDarkMode ? <FaSun /> : <FaMoon />}
  </Button>
);

export default ThemeToggleButton;