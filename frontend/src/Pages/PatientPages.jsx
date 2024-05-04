import React, { useState } from 'react';
import '../Style/PatientPages.css';

function PatientPages({ selectedPatient }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [newAge, setNewAge] = useState('');
  const [conditionIndex, setConditionIndex] = useState('');
  const [newCondition, setNewCondition] = useState('');
  const [additionalCondition, setAdditionalCondition] = useState(''); // New state variable for the additional condition
  const [deleteIndex, setDeleteIndex] = useState(''); // New state variable for the index to delete

  function handleConditionUpdate() {
    if (newAge.trim() !== '') {
      selectedPatient.age = parseInt(newAge);
      setNewAge('');
    }

    if (conditionIndex.trim() !== '' && newCondition.trim() !== '') {
      const index = parseInt(conditionIndex);
      if (!isNaN(index) && index >= 1 && index <= selectedPatient.condition.length) {
        selectedPatient.condition[index - 1] = newCondition;
        setConditionIndex('');
        setNewCondition('');
      }
    }

    if (additionalCondition.trim() !== '') { // Check if additional condition is not empty
      selectedPatient.condition.push(additionalCondition); // Add the new condition to the array
      setAdditionalCondition(''); // Clear the input box
    }

    if (deleteIndex.trim() !== '') { // Check if delete index is not empty
      const indexToDelete = parseInt(deleteIndex);
      if (!isNaN(indexToDelete) && indexToDelete >= 1 && indexToDelete <= selectedPatient.condition.length) {
        selectedPatient.condition.splice(indexToDelete - 1, 1); // Remove the condition at the specified index
        setDeleteIndex('');
      }
    }
  }

  function handleAgeChange(e) {
    // Filter out non-numeric characters
    const value = e.target.value.replace(/\D/, '');
    setNewAge(value);
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
          <h1>Patient Page 1</h1>
          <p>This is the content of patient page 1.</p>
          <div className="image-container">
            <img
              src={selectedPatient.id}
              alt="Patient"
              className="small-image"
            />
          </div>
          <p>Name: {selectedPatient.name}</p>
          <p>Age: {selectedPatient.age}</p>
          <p>Gender: {selectedPatient.gender}</p>
          <p>Condition:</p>
          <ol>
            {selectedPatient.condition.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ol>
          <div>
            <div className="input-text">
              <input
                type="text"
                value={newAge}
                onChange={handleAgeChange}
                placeholder={!newAge ? 'Change age, enter its value here' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={conditionIndex}
                onChange={(e) => setConditionIndex(e.target.value)}
                placeholder={!conditionIndex ? 'Change condition, enter its id here' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={newCondition}
                onChange={(e) => setNewCondition(e.target.value)}
                placeholder={!newCondition ? 'Change condition, enter its value here' : ''}
              />
            </div>
            <div className="input-text"> {/* New input box for additional condition */}
              <input
                type="text"
                value={additionalCondition}
                onChange={(e) => setAdditionalCondition(e.target.value)}
                placeholder={!additionalCondition ? 'Add new condition, enter its value here' : ''}
              />
            </div>
            <div className="input-text"> {/* New input box for delete index */}
              <input
                type="text"
                value={deleteIndex}
                onChange={(e) => setDeleteIndex(e.target.value)}
                placeholder={!deleteIndex ? 'Delete condition, enter its id here' : ''}
              />
            </div>
          </div>
          <button onClick={handleConditionUpdate}>Update All</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
      )}
      {currentPage === 2 && (
        <div>
          <h1>Patient Page 2</h1>
          <p>This is the content of patient page 2.</p>
          <p>Name: {selectedPatient.name}</p>
          <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
      )}
      {currentPage === 3 && (
        <div>
          <h1>Patient Page 3</h1>
          <p>This is the content of patient page 3.</p>
          <p>Age: {selectedPatient.age}</p>
          <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
      )}
      {currentPage === 4 && (
        <div>
          <h1>Patient Page 4</h1>
          <p>This is the content of patient page 4.</p>
          <p>Gender: {selectedPatient.gender}</p>
          <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
      )}
      {currentPage === 5 && (
        <div>
          <h1>Patient Page 5</h1>
          <p>This is the content of patient page 5.</p>
          <p>Condition:</p>
          <ol>
            {selectedPatient.condition.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ol>
          <button onClick={prevPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
        </div>
      )}
      {currentPage === 6 && (
        <div>
          <h1>Patient Page 6</h1>
          <p>This is the content of patient page 6.</p>
          <p>Name: {selectedPatient.name}</p>
          <button onClick={prevPage}>Previous Page</button>
        </div>
      )}
    </div>
  );
}

export default PatientPages;
