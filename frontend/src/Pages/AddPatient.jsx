import React, { useState } from 'react';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';
import '../Style/MainDashboard.css';
import '../Style/AddPatient.css';
import patients from '../MockData'; // Import the patients array from MockData.js

function AddPatient() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPatient = {
      name,
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
    setName('');
    alert('Patient added successfully');
  };

  return (
    <div className="main-dashboard">
      <Header />
      <Sidebar />
      <h1>Add a Patient</h1>
      <form onSubmit={handleSubmit}>
        {/* Input field for patient's name */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        {/* Submit button */}
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
}

export default AddPatient;
