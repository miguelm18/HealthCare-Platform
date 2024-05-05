import React, { useState } from 'react';
import Header from '../Layout/Header'; // Import the Header component
import Sidebar from '../Layout/Sidebar'; // Import the Sidebar component

/**
 * Component representing the settings page.
 */
function Settings() {
  // State variable for background color
  const [backgroundColor, setBackgroundColor] = useState('white');

  // Function to handle background color change
  const handleColorChange = () => {
    // Toggle background color between white and blue
    if (backgroundColor === 'white') {
      setBackgroundColor('blue');
    } else {
      setBackgroundColor('white');
    }
  };

  // JSX for rendering the component
  return (
    <div className="main-dashboard" style={{ backgroundColor: backgroundColor }}>
      {/* Render the header component */}
      <Header />
      {/* Render the sidebar component */}
      <Sidebar />
      {/* Add your settings content here */}
      <h1>Settings</h1>
      <p>This is the content of settings.</p>
      {/* Button to toggle background color */}
      <button onClick={handleColorChange}>Toggle Background Color</button>
    </div>
  );
}

export default Settings;
