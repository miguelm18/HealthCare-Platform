import React, { useState } from 'react';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';
import '../Style/MainDashboard.css'; // Import the CSS file for MainDashboard
import SearchingBar from '../Layout/SearchingBar';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import PatientPages from './PatientPages';
import notifications from '../MockNotifications'; // Import notifications array

/**
 * Component representing the main dashboard.
 */
function MainDashboard() {
  // State variables
  const [filteredPatients, setFilteredPatients] = useState([]); // State for filtered patients
  const [showPatient1, setShowPatient1] = useState(false); // State to control rendering of Patient1
  const [selectedPatient, setSelectedPatient] = useState(null); // State to store selected patient name
  const [notificationsState, setNotifications] = useState(notifications); // State for notifications

  // Function to update filtered patients
  const parentTable = (value2) => {
    setFilteredPatients(value2);
  };

  // Function to handle clicking on a patient link
  function handleLinkClick(patient) {
    setSelectedPatient(patient);
    setShowPatient1(true);
    setFilteredPatients([]);
  };

  function deleteAllNotifications() {
    setNotifications(notificationsState.splice(0, notifications.length));
  }

  // JSX for rendering the component
  return (
    <div className="main-dashboard">
      {/* Render the header component */}
      <Header />
      {/* Render the sidebar component */}
      <Sidebar />
      {/* Add your dashboard content here */}
      <h1>Dashboard</h1>
      <p>Welcome to the Health Care Platform</p>
      {/* Conditional rendering of "Patient Search" heading */}
      {filteredPatients.length > 0 && <h2>Patient Search</h2>}
      {/* Render filtered patient table */}
      {filteredPatients.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through filtered patients and render table rows */}
            {filteredPatients.map((patient, index) => (
              <tr key={index}>
                {/* Render patient name as a link */}
                <td><Link to="." onClick={() => handleLinkClick(patient)}>{patient.name}</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* Render patient information pages */}
      {showPatient1 && <PatientPages selectedPatient={selectedPatient} />}
      <div className="search-bar-container">
        {/* Render the searching bar */}
        <SearchingBar parentTable={parentTable} />
      </div>
      {/* Render Notifications */}
      <div className='dashboard-box'>
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>
              {notification.description}: {notification.whatHappened}
            </li>
          ))}
        </ul>
        <button onClick={deleteAllNotifications}>Clear Notifications</button>
      </div>
      {/* Placeholder for calendar */}
      <p>Implement the calendar thingy somewhere on this page</p>
      <br />
      <br />
    </div>
  );
}

export default MainDashboard;
