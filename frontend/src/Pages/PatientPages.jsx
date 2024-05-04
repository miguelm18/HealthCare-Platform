import React, { useState } from 'react';
import '../Style/PatientPages.css';

function PatientPages({ selectedPatient }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [conditionIndex, setConditionIndex] = useState('');
  const [newCondition, setNewCondition] = useState('');
  const [additionalCondition, setAdditionalCondition] = useState('');
  const [deleteIndex, setDeleteIndex] = useState('');
  const [newYear, setNewYear] = useState('');
  const [newMonth, setNewMonth] = useState('');
  const [newDay, setNewDay] = useState('');

  function handleChange() {
    if (conditionIndex.trim() !== '' && newCondition.trim() !== '') {
      const index = parseInt(conditionIndex);
      if (!isNaN(index) && index >= 1 && index <= selectedPatient.currentIllnesses.length) {
        selectedPatient.currentIllnesses[index - 1] = newCondition;
        setConditionIndex('');
        setNewCondition('');
      }
    }

    if (additionalCondition.trim() !== '') {
      selectedPatient.currentIllnesses.push(additionalCondition);
      setAdditionalCondition('');
    }

    if (deleteIndex.trim() !== '') {
      const indexToDelete = parseInt(deleteIndex);
      if (!isNaN(indexToDelete) && indexToDelete >= 1 && indexToDelete <= selectedPatient.currentIllnesses.length) {
        selectedPatient.currentIllnesses.splice(indexToDelete - 1, 1);
        setDeleteIndex('');
      }
    }

    if (newYear.trim() !== '') {
      const year = parseInt(newYear);
      if (!isNaN(year)) {
        selectedPatient.age.years = year;
        setNewYear('');
      }
    }
    if (newMonth.trim() !== '') {
      const month = parseInt(newMonth);
      if (!isNaN(month)) {
        selectedPatient.age.months = month;
        setNewMonth('');
      }
    }
    if (newDay.trim() !== '') {
      const day = parseInt(newDay);
      if (!isNaN(day)) {
        selectedPatient.age.days = day;
        setNewDay('');
      }
    }
  }

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function prevPage() {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div className="patient-page-left-margin">
      {currentPage === 1 && (
        <div>
          <h1>General Patient Information</h1>
          <button onClick={nextPage}>Next Page</button>
          <div className="image-container">
            <img
              src={selectedPatient.id}
              alt="Patient"
              className="small-image"
            />
          </div>
          <p>First Name: {selectedPatient.firstName}</p>
          <p>Middle Name: {selectedPatient.middleName}</p>
          <p>Last Name: {selectedPatient.lastName}</p>
          <p>Date of Birth: {selectedPatient.dateOfBirth}</p>
          <p>Blood Group: {selectedPatient.bloodGroup}</p>
          <p>RH Factor: {selectedPatient.rhFactor}</p>
          <p>Marital Status: {selectedPatient.maritalStatus}</p>
          <p>Age: {selectedPatient.age.years} years, {selectedPatient.age.months} months, {selectedPatient.age.days} days</p>
          <p>Gender: {selectedPatient.gender}</p>
          <p>Contact Info</p>
          <p>Phone Residence: {selectedPatient.phoneResidence}</p>
          <p>Mobile Phone: {selectedPatient.mobilePhone}</p>
          <p>Email Address: {selectedPatient.emailAddress}</p>
          <p>Emergency Contact</p>
          <p>Emergency Contact Name: {selectedPatient.emergencyContactName}</p>
          <p>Emergency Contact Phone Number: {selectedPatient.emergencyContactPhoneNumber}</p>
          <p>Family:</p>
          <ol>
            {selectedPatient.family.map((family, index) => (
              <li key={index}>{family}</li>
            ))}
          </ol>
          <div>
            <div className="input-text">
              <input
                type="text"
                value={newYear}
                onChange={(e) => setNewYear(e.target.value)}
                placeholder={!newYear ? 'Change age (years), enter its value here' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={newMonth}
                onChange={(e) => setNewMonth(e.target.value)}
                placeholder={!newMonth ? 'Change age (months), enter its value here' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={newDay}
                onChange={(e) => setNewDay(e.target.value)}
                placeholder={!newDay ? 'Change age (days), enter its value here' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={conditionIndex}
                onChange={(e) => setConditionIndex(e.target.value)}
                placeholder={!conditionIndex ? 'Change a current illness, enter its id here' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={newCondition}
                onChange={(e) => setNewCondition(e.target.value)}
                placeholder={!newCondition ? 'Change a current illness, enter its value here' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={additionalCondition}
                onChange={(e) => setAdditionalCondition(e.target.value)}
                placeholder={!additionalCondition ? 'Add a new current illness, enter its value here' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={deleteIndex}
                onChange={(e) => setDeleteIndex(e.target.value)}
                placeholder={!deleteIndex ? 'Delete a current illness, enter its id here' : ''}
              />
            </div>
          </div>
          <button onClick={handleChange}>Update All</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
      )}
      {currentPage === 2 && (
        <div>
          <h1>Health Conditions</h1>
          <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
          <p>Current Illnesses:</p>
          <ol>
            {selectedPatient.currentIllnesses.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ol>
          <p>Previous Illnesses:</p>
          <ol>
            {selectedPatient.previousIllnesses.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ol>
          <p>Specific Allergies:</p>
          <ol>
            {selectedPatient.specificAllergies.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ol>
          <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
      )}
      {currentPage === 3 && (
        <div>
          <h1>Medications</h1>
          <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
          <p>Current Medications:</p>
          <ol>
            {selectedPatient.currentMedications.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ol>
          <p>Past Medications:</p>
          <ol>
            {selectedPatient.pastMedications.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ol>
          <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
      )}
      {currentPage === 4 && (
        <div>
          <h1>Patient Page 4 Empty For Now</h1>
          <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>

          <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
      )}
      {currentPage === 5 && (
        <div>
          <h1>Lab Reports</h1>
          <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
          <ul>
            {selectedPatient.labReports.map((report, index) => (
              <li key={index}>
                <p>Lab Report:</p>
                <p>{report.report}</p> {/* Render the report text */}
                <p>Lab Report Photos:</p>
                <div className="image-container"> {/* Render photo */}
                  <img src={report.photo} alt="Lab Report" className="large-image" />
                </div>
                <p>Radiology Videos:</p>
                <div> {/* Render radiology video */}
                  <iframe width="560" height="315"
                    src={report.radiologyVideo} title="radiology video">
                  </iframe>
                </div>
                <p>MRI Tracing Images:</p>
                <div className="image-container"> {/* Render MRI tracing images */}
                  <img src={report.mriTracingImages} alt="MRI Tracing Images" className="large-image" />
                </div>
              </li>
            ))}
          </ul>
          <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
      )}
      {currentPage === 6 && (
        <div>
          <h1>Appointments</h1>
          <button onClick={prevPage}>Previous Page</button>
          <p>Appointment Times:</p>
          <ol>
            {selectedPatient.appointmentTimes.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ol>
          <p>Doctor Visits:</p>
          <ol>
            {selectedPatient.doctorVisits.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ol>
          <p>X-Rays:</p>
          <div>
            {selectedPatient.xRays.map((xRay, index) => (
              <div key={index} className="image-container">
                <img src={xRay} alt={`X-Ray ${index}`} className="large-image" />
              </div>
            ))}
          </div>
          <p>Vaccinations:</p>
          <ol>
            {selectedPatient.vaccinations.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ol>
          <p>Name: {selectedPatient.name}</p>
          <button onClick={prevPage}>Previous Page</button>
        </div>
      )}
    </div>
  );
}

export default PatientPages;
