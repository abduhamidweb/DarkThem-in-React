import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('isDarkMode') === 'true'
  );

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="container">
        <h1>Dark Mode Toggle</h1>
        <label className="switch">
          <input type="checkbox" checked={isDarkMode} onChange={handleModeToggle} />
          <span className="slider round"></span>
        </label>
        <p>Toggle the switch to change between light and dark mode</p>
      </div>
    </div>
  );
}

export default App;
