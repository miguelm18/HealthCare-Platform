import React, { useState } from 'react';
import '../Style/PatientPages.css';

function PatientPages({ selectedPatient }) {
  //All Pages
  const [currentPage, setCurrentPage] = useState(1);

  //Page 1
  const [newPatientID, setNewPatientID] = useState('');
  const [newFirstName, setNewFirstName] = useState('');
  const [newMiddleName, setNewMiddleName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newGender, setNewGender] = useState('');
  const [newDateOfBirth, setNewDateOfBirth] = useState('');
  const [newBloodGroup, setNewBloodGroup] = useState('');
  const [newRHFactor, setNewRHFactor] = useState('');
  const [newMaritalStatus, setNewMaritalStatus] = useState('');
  const [newYear, setNewYear] = useState('');
  const [newMonth, setNewMonth] = useState('');
  const [newDay, setNewDay] = useState('');
  const [newPhoneResidence, setNewPhoneResidence] = useState('');
  const [newMobilePhone, setNewMobilePhone] = useState('');
  const [newEmailAddress, setNewEmailAddress] = useState('');
  const [newEmergencyContactName, setNewEmergencyContactName] = useState('');
  const [newEmergencyContactPhoneNumber, setNewEmergencyContactPhoneNumber] = useState('');
  const [newFamilyMember, addNewFamilyMember] = useState('');
  const [deleteFamilyMemberIndex, deleteFamilyMember] = useState('');

  //Page 2
  const [additionalCondition, setAdditionalCondition] = useState('');
  const [deleteIndex, setDeleteIndex] = useState('');
  const [additionalPreviousIllness, addAdditionalPreviousIllness] = useState('');
  const [deletePreviousIllnessIndex, deletePreviousIllness] = useState('');
  const [additionalSpecificAllergies, addAdditionalSpecificAllergies] = useState('');
  const [deleteSpecificAllergiesIndex, deleteSpecificAllergies] = useState('');

  //Page 3
  const [additionalCurrentMedication, addAdditionalCurrentMedication] = useState('');
  const [deleteCurrentMedicationIndex, deleteCurrentMedication] = useState('');
  const [additionalPastMedication, addAdditionalPastMedication] = useState('');
  const [deletePastMedicationIndex, deletePastMedication] = useState('');

  function handleChange() {

    //Page 1
    if (newPatientID.trim() !== '') {
      selectedPatient.id = newPatientID;
    }
    if (newFirstName.trim() !== '') {
      selectedPatient.firstName = newFirstName;
    }
    if (newMiddleName.trim() !== '') {
      selectedPatient.middleName = newMiddleName;
    }
    if (newLastName.trim() !== '') {
      selectedPatient.lastName = newLastName;
    }
    if (newGender.trim() !== '') {
      selectedPatient.gender = newGender;
    }
    if (newDateOfBirth.trim() !== '') {
      selectedPatient.dateOfBirth = newDateOfBirth;
    }
    if (newBloodGroup.trim() !== '') {
      selectedPatient.bloodGroup = newBloodGroup;
    }
    if (newRHFactor.trim() !== '') {
      selectedPatient.rhFactor = newRHFactor;
    }
    if (newMaritalStatus.trim() !== '') {
      selectedPatient.maritalStatus = newMaritalStatus;
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
    if (newPhoneResidence.trim() !== '') {
      selectedPatient.phoneResidence = newPhoneResidence;
    }
    if (newMobilePhone.trim() !== '') {
      selectedPatient.mobilePhone = newMobilePhone;
    }
    if (newEmailAddress.trim() !== '') {
      selectedPatient.emailAddress = newEmailAddress;
    }
    if (newEmergencyContactName.trim() !== '') {
      selectedPatient.emergencyContactName = newEmergencyContactName;
    }
    if (newEmergencyContactPhoneNumber.trim() !== '') {
      selectedPatient.emergencyContactPhoneNumber = newEmergencyContactPhoneNumber;
    }
    if (newFamilyMember.trim() !== '') {
      selectedPatient.family.push(newFamilyMember);
      addNewFamilyMember('');
    }
    if (deleteFamilyMemberIndex.trim() !== '') {
      const indexToDelete = parseInt(deleteFamilyMemberIndex);
      if (!isNaN(indexToDelete) && indexToDelete >= 1 && indexToDelete <= selectedPatient.family.length) {
        selectedPatient.family.splice(indexToDelete - 1, 1);
        deleteFamilyMember('');
      }
    }
    // Reset the input fields
    setNewPatientID('');
    setNewFirstName('');
    setNewMiddleName('');
    setNewLastName('');
    setNewGender('');
    setNewDateOfBirth('');
    setNewBloodGroup('');
    setNewRHFactor('');
    setNewMaritalStatus('');
    setNewPhoneResidence('');
    setNewMobilePhone('');
    setNewEmailAddress('');
    setNewEmergencyContactName('');
    setNewEmergencyContactPhoneNumber('');

    //Page 2
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

    if (additionalPreviousIllness.trim() !== '') {
      selectedPatient.previousIllnesses.push(additionalPreviousIllness);
      addAdditionalPreviousIllness('');
    }
    if (deletePreviousIllnessIndex.trim() !== '') {
      const indexToDelete2 = parseInt(deletePreviousIllnessIndex);
      if (!isNaN(indexToDelete2) && indexToDelete2 >= 1 && indexToDelete2 <= selectedPatient.previousIllnesses.length) {
        selectedPatient.previousIllnesses.splice(indexToDelete2 - 1, 1);
        deletePreviousIllness('');
      }
    }

    if (additionalSpecificAllergies.trim() !== '') {
      selectedPatient.specificAllergies.push(additionalSpecificAllergies);
      addAdditionalSpecificAllergies('');
    }
    if (deleteSpecificAllergiesIndex.trim() !== '') {
      const indexToDelete3 = parseInt(deleteSpecificAllergiesIndex);
      if (!isNaN(indexToDelete3) && indexToDelete3 >= 1 && indexToDelete3 <= selectedPatient.specificAllergies.length) {
        selectedPatient.specificAllergies.splice(indexToDelete3 - 1, 1);
        deleteSpecificAllergies('');
      }
    }

    //Page 3
    if (additionalCurrentMedication.trim() !== '') {
      selectedPatient.currentMedications.push(additionalCurrentMedication);
      addAdditionalCurrentMedication('');
    }
    if (deleteCurrentMedicationIndex.trim() !== '') {
      const indexToDelete4 = parseInt(deleteCurrentMedicationIndex);
      if (!isNaN(indexToDelete4) && indexToDelete4 >= 1 && indexToDelete4 <= selectedPatient.currentMedications.length) {
        selectedPatient.currentMedications.splice(indexToDelete4 - 1, 1);
        deleteCurrentMedication('');
      }
    }

    if (additionalPastMedication.trim() !== '') {
      selectedPatient.pastMedications.push(additionalPastMedication);
      addAdditionalPastMedication('');
    }
    if (deletePastMedicationIndex.trim() !== '') {
      const indexToDelete5 = parseInt(deletePastMedicationIndex);
      if (!isNaN(indexToDelete5) && indexToDelete5 >= 1 && indexToDelete5 <= selectedPatient.pastMedications.length) {
        selectedPatient.pastMedications.splice(indexToDelete5 - 1, 1);
        deletePastMedication('');
      }
    }


  }

  //All Pages
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
            <div>
              {/* Form for changing patient's values for page 1 */}
              <form onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission
                handleChange(); // Call handleChange function
              }}>
                <div className="input-text">
                  <input
                    type="text"
                    value={newPatientID}
                    onChange={(e) => setNewPatientID(e.target.value)}
                    placeholder={!newPatientID ? 'New Patient ID' : ''}
                  />
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    value={newFirstName}
                    onChange={(e) => setNewFirstName(e.target.value)}
                    placeholder={!newFirstName ? 'New First Name' : ''}
                  />
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    value={newMiddleName}
                    onChange={(e) => setNewMiddleName(e.target.value)}
                    placeholder={!newMiddleName ? 'New Middle Name' : ''}
                  />
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    value={newLastName}
                    onChange={(e) => setNewLastName(e.target.value)}
                    placeholder={!newLastName ? 'New Last Name' : ''}
                  />
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    value={newGender}
                    onChange={(e) => setNewGender(e.target.value)}
                    placeholder={!newGender ? 'New Gender' : ''}
                  />
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    value={newDateOfBirth}
                    onChange={(e) => setNewDateOfBirth(e.target.value)}
                    placeholder={!newDateOfBirth ? 'New Date of Birth' : ''}
                  />
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    value={newBloodGroup}
                    onChange={(e) => setNewBloodGroup(e.target.value)}
                    placeholder={!newBloodGroup ? 'New Blood Group' : ''}
                  />
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    value={newRHFactor}
                    onChange={(e) => setNewRHFactor(e.target.value)}
                    placeholder={!newRHFactor ? 'New RH Factor' : ''}
                  />
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    value={newMaritalStatus}
                    onChange={(e) => setNewMaritalStatus(e.target.value)}
                    placeholder={!newMaritalStatus ? 'New Marital Status' : ''}
                  />
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    value={newYear}
                    onChange={(e) => setNewYear(e.target.value)}
                    placeholder={!newYear ? 'New age (years)' : ''}
                  />
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    value={newMonth}
                    onChange={(e) => setNewMonth(e.target.value)}
                    placeholder={!newMonth ? 'New age (months)' : ''}
                  />
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    value={newDay}
                    onChange={(e) => setNewDay(e.target.value)}
                    placeholder={!newDay ? 'New age (days)' : ''}
                  />
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    value={newPhoneResidence}
                    onChange={(e) => setNewPhoneResidence(e.target.value)}
                    placeholder={!newPhoneResidence ? 'New Phone Number (Residence)' : ''}
                  />
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    value={newMobilePhone}
                    onChange={(e) => setNewMobilePhone(e.target.value)}
                    placeholder={!newMobilePhone ? 'New Phone Number (Mobile)' : ''}
                  />
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    value={newEmailAddress}
                    onChange={(e) => setNewEmailAddress(e.target.value)}
                    placeholder={!newEmailAddress ? 'New Email Address' : ''}
                  />
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    value={newEmergencyContactName}
                    onChange={(e) => setNewEmergencyContactName(e.target.value)}
                    placeholder={!newEmergencyContactName ? 'New Emergency Contact Name' : ''}
                  />
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    value={newEmergencyContactPhoneNumber}
                    onChange={(e) => setNewEmergencyContactPhoneNumber(e.target.value)}
                    placeholder={!newEmergencyContactPhoneNumber ? 'New Emergency Contact Phone Number' : ''}
                  />
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    value={newFamilyMember}
                    onChange={(e) => addNewFamilyMember(e.target.value)}
                    placeholder={!newFamilyMember ? 'Add a Family Member' : ''}
                  />
                </div>
                <div className="input-text">
                  <input
                    type="text"
                    value={deleteFamilyMemberIndex}
                    onChange={(e) => deleteFamilyMember(e.target.value)}
                    placeholder={!deleteFamilyMemberIndex ? 'Delete a family member, enter their id' : ''}
                  />
                </div>
                <button type="submit">Update All</button>
              </form>
            </div>
          </div>
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
          <form onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            handleChange(); // Call handleChange function
          }}>
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
            <div className="input-text">
              <input
                type="text"
                value={additionalPreviousIllness}
                onChange={(e) => addAdditionalPreviousIllness(e.target.value)}
                placeholder={!additionalPreviousIllness ? 'Add a new previous illness, enter its value here' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={deletePreviousIllnessIndex}
                onChange={(e) => deletePreviousIllness(e.target.value)}
                placeholder={!deletePreviousIllnessIndex ? 'Delete a previous illness, enter its id here' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={additionalSpecificAllergies}
                onChange={(e) => addAdditionalSpecificAllergies(e.target.value)}
                placeholder={!additionalSpecificAllergies ? 'Add a new allergy, enter its value here' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={deleteSpecificAllergiesIndex}
                onChange={(e) => deleteSpecificAllergies(e.target.value)}
                placeholder={!deleteSpecificAllergiesIndex ? 'Delete an allergy, enter its id here' : ''}
              />
            </div>
            <button type="submit">Update All</button>
          </form>
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
          <form onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            handleChange(); // Call handleChange function
          }}>
            <div className="input-text">
              <input
                type="text"
                value={additionalCurrentMedication}
                onChange={(e) => addAdditionalCurrentMedication(e.target.value)}
                placeholder={!additionalCurrentMedication ? 'Add a current medication' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={deleteCurrentMedicationIndex}
                onChange={(e) => deleteCurrentMedication(e.target.value)}
                placeholder={!deleteCurrentMedicationIndex ? 'Delete a current medication, enter its id here' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={additionalPastMedication}
                onChange={(e) => addAdditionalPastMedication(e.target.value)}
                placeholder={!additionalPastMedication ? 'Add a past medication' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={deletePastMedicationIndex}
                onChange={(e) => deletePastMedication(e.target.value)}
                placeholder={!deletePastMedicationIndex ? 'Delete a past medication, enter its id here' : ''}
              />
            </div>
            <button type="submit">Update All</button>
          </form>
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