import React, { useState } from 'react';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import './MainDashboard.css'; // Import the CSS file for MainDashboard
import SearchingBar from './SearchingBar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function MainDashboard() {

  const [patientName, setPatientName] = useState("blank");
  const [filteredPatients, setFilteredPatients] = useState([]);

  const parentName = (value) => {
    setPatientName(value);
  };

  const parentTable = (value2) => {
    setFilteredPatients(value2);
  };

  return (
    <div className="main-dashboard">
      <Header />
      <Sidebar />
      {/* Add your dashboard content here */}
      <h1>MainDashboard</h1>
      <p>This is the content of the MainDashboard.</p>
      <div className="search-bar-container">
        <SearchingBar parentName={parentName} parentTable={parentTable} />
      </div>
      <p>implement notifications somewhere on this page</p>
      <p>implement the calendar thingy somewhere on this page</p>
      <p>Patient Name Searched: {patientName}</p>
      <br></br>
      <br></br>
      {filteredPatients.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient, index) => (
              <tr key={index}>
                <td><Link to="/patient1">{patient.name}</Link></td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MainDashboard;

