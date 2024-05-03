import React, { useState } from 'react';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import './MainDashboard.css'; // Import the CSS file for MainDashboard
import SearchingBar from './SearchingBar';

function MainDashboard() {

  const [patientName, setPatientName] = useState("blank");

  const parentName = (value) => {
    setPatientName(value);
  };

  return (
    <div className="main-dashboard">
      <Header />
      <Sidebar />
      {/* Add your dashboard content here */}
      <h1>MainDashboard</h1>
      <p>This is the content of the MainDashboard.</p>
      <div className="search-bar-container">
        <SearchingBar parentName={parentName} />
      </div>
      <p>implement notifications somewhere on this page</p>
      <p>implement the calendar thingy somewhere on this page</p>
      <p>Patient Name Searched: {patientName}</p>
    </div>
  );
}

export default MainDashboard;

