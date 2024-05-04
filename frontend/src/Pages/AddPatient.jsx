import React, { useState } from 'react';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';
import '../Style/MainDashboard.css'; // Import the CSS file for MainDashboard

function AddPatient() {
  return (
    <div className="main-dashboard">
      <Header />
      <Sidebar />
      <h1>Add a Patient</h1>
    </div>
  )
}

export default AddPatient;