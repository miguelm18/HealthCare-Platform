import React, { useState } from 'react';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';

function Settings() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleColorChange = () => {
    if (backgroundColor === 'white') {
      setBackgroundColor('blue');
    } else {
      setBackgroundColor('white');
    }
  };

  return (
    <div className="main-dashboard" style={{ backgroundColor: backgroundColor }}>
      <Header />
      <Sidebar />
      {/* Add your settings content here */}
      <h1>Settings</h1>
      <p>This is the content of settings.</p>
      <button onClick={handleColorChange}>Toggle Background Color</button>
    </div>
  );
}

export default Settings;
