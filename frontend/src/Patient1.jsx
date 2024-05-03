import React, { useState } from 'react';

function Patient1({ selectedPatient }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [newCondition, setNewCondition] = useState('');

  function handleKeyDown(event) {
    if (event.key === 'Enter' && newCondition.trim() !== '') {
      selectedPatient.condition = newCondition;
      setNewCondition(''); // Clear the input after updating the condition
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
          <h1>Patient Page 1</h1>
          <p>This is the content of patient page 1.</p>
          <p>Name: {selectedPatient.name}</p>
          <p>Age: {selectedPatient.age}</p>
          <p>Gender: {selectedPatient.gender}</p>
          <p>Condition: {selectedPatient.condition}</p>
          <div className="input-text">
            <input
              type="text"
              value={newCondition}
              onChange={(e) => setNewCondition(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={!newCondition ? 'Enter new condition and press Enter' : ''}
            />
          </div>
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
          <p>Condition: {selectedPatient.condition}</p>
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

export default Patient1;