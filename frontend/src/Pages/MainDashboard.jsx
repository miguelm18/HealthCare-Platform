import React, { useState } from 'react';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';
import '../Style/MainDashboard.css'; // Import the CSS file for MainDashboard
import SearchingBar from '../Layout/SearchingBar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import PatientPages from './PatientPages';

function MainDashboard() {
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [showPatient1, setShowPatient1] = useState(false); // State to control rendering of Patient1
  const [selectedPatient, setSelectedPatient] = useState(null); // State to store selected patient name

  const parentTable = (value2) => {
    setFilteredPatients(value2);
  };

  function handleLinkClick(patient) {
    setSelectedPatient(patient);
    setShowPatient1(true);
    setFilteredPatients([]);
  };

  return (
    <div className="main-dashboard">
      <Header />
      <Sidebar />
      {/* Add your dashboard content here */}
      <h1>MainDashboard</h1>
      <p>This is the content of the MainDashboard.</p>
      <div className="search-bar-container">
        <SearchingBar parentTable={parentTable} />
      </div>
      <p>Implement notifications somewhere on this page</p>
      <p>Implement the calendar thingy somewhere on this page</p>
      <br />
      <br />
      {filteredPatients.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient, index) => (
              <tr key={index}>
                <td><Link to="." onClick={() => handleLinkClick(patient)}>{patient.name}</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Render patient information pages here */}
      {showPatient1 && <PatientPages selectedPatient={selectedPatient} />}
    </div>
  );
}

export default MainDashboard;
