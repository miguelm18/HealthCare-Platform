import React, { useState } from 'react';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';
import '../Style/MainDashboard.css';
import '../Style/AddPatient.css';
import patients from '../MockData'; // Import the patients array from MockData.js

/**
 * Component for adding and deleting patients.
 */
function AddDeletePatient() {
  // State variables for input fields and error message
  const [addName, setAddName] = useState('');
  const [deleteName, setDeleteName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle form submission for adding a patient
  const handleAddSubmit = (e) => {
    e.preventDefault();
    // Create a new patient object with provided name
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

  // Function to handle form submission for deleting a patient
  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    // Find the index of the patient with provided name
    const index = patients.findIndex((patient) => patient.name === deleteName);
    if (index !== -1) {
      patients.splice(index, 1); // Remove patient from the array
      alert('Patient deleted successfully');
    } else {
      setErrorMessage('Patient not found');
    }
    // Reset the name field and error message
    setDeleteName('');
    setErrorMessage('');
  };

  // JSX for rendering the component
  return (
    <div className="main-dashboard">
      {/* Render the header component */}
      <Header />
      {/* Render the sidebar component */}
      <Sidebar />
      <h1>Add a Patient</h1>
      {/* Form for adding a patient */}
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
      {/* Form for deleting a patient */}
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
        {/* Display error message if patient not found */}
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default AddDeletePatient;
