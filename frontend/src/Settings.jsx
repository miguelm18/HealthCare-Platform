import React from 'react';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';

function Settings() {
  return (
    <div className="main-dashboard">
      <Header />
      <Sidebar />
      {/* Add your settings content here */}
      <h1>Settings</h1>
      <p>This is the content of settings.</p>
    </div>
  );
}

export default Settings;