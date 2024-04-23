import React from 'react';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';

function PatientSearch() {
  return (
    <div className="main-dashboard">
      <Header />
      <Sidebar />
      {/* Add your settings content here */}
      <h1>Patient Search</h1>
      <p>This is the page where you search for patients.</p>
    </div>
  );
}

export default PatientSearch;