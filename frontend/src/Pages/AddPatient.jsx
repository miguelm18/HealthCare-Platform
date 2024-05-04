import React, { useState } from 'react';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';
import '../Style/MainDashboard.css';
import '../Style/AddPatient.css';
import patients from '../MockData'; // Import the patients array from MockData.js

function AddPatient() {
  const [addName, setAddName] = useState('');
  const [deleteName, setDeleteName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const newPatient = {
      name: addName,
      firstName: '',
      middleName: '',
      lastName: '',
      gender: '',
      dateOfBirth: '',
      bloodGroup: '',
      rhFactor: '',
      maritalStatus: '',
      age: { years: 0, months: 0, days: 0 },
      phoneResidence: '',
      mobilePhone: '',
      emailAddress: '',
      emergencyContactName: '',
      emergencyContactPhoneNumber: '',
      family: [],
      currentIllnesses: [],
      previousIllnesses: [],
      specificAllergies: [],
      currentMedications: [],
      pastMedications: [],
      labReports: [],
      xRays: [],
      doctorVisits: [],
      vaccinations: [],
      appointmentTimes: []
    };
    patients.push(newPatient); // Update the patients array directly
    // Reset the name field only
    setAddName('');
    alert('Patient added successfully');
  };

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    const index = patients.findIndex((patient) => patient.name === deleteName);
    if (index !== -1) {
      patients.splice(index, 1);
      alert('Patient deleted successfully');
    } else {
      setErrorMessage('Patient not found');
    }
    // Reset the name field and error message
    setDeleteName('');
    setErrorMessage('');
  };

  return (
    <div className="main-dashboard">
      <Header />
      <Sidebar />
      <h1>Add a Patient</h1>
      <form onSubmit={handleAddSubmit}>
        {/* Input field for adding patient's name */}
        <input
          type="text"
          value={addName}
          onChange={(e) => setAddName(e.target.value)}
          placeholder="Name"
          required
          className="input-text"
        />
        {/* Submit button for adding patient */}
        <button type="submit">Add Patient</button>
      </form>
      <h1>Delete a Patient</h1>
      <form onSubmit={handleDeleteSubmit}>
        {/* Input field for deleting patient's name */}
        <input
          type="text"
          value={deleteName}
          onChange={(e) => setDeleteName(e.target.value)}
          placeholder="Name to Delete"
          required
          className="input-text"
        />
        {/* Submit button for deleting patient */}
        <button type="submit">Delete Patient</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default AddPatient;
