import React from 'react';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';

function Patient1() {
  return (
    <div className="main-dashboard">
      <Header />
      <Sidebar />
      {/* Add your settings content here */}
      <h1>Patient Page 1</h1>
      <p>This is the content of patient page 1.</p>
    </div>
  );
}

export default Patient1;