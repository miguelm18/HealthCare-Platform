import React, { useState } from 'react';

function Patient1({ selectedPatient }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [newAge, setNewAge] = useState('');
  const [conditionIndex, setConditionIndex] = useState('');
  const [newCondition, setNewCondition] = useState('');

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
                placeholder={!newAge ? 'Enter new age' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={conditionIndex}
                onChange={(e) => setConditionIndex(e.target.value)}
                placeholder={!conditionIndex ? 'Enter condition number' : ''}
              />
            </div>
            <div className="input-text">
              <input
                type="text"
                value={newCondition}
                onChange={(e) => setNewCondition(e.target.value)}
                placeholder={!newCondition ? 'Enter new condition' : ''}
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

export default Patient1;
