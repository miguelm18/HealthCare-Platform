import React from 'react';

function Patient1({ selectedPatientName }) {
  return (
    <div className="main-dashboard">
      <h1>Patient Page 1</h1>
      <p>This is the content of patient page 1.</p>
      <p>Name of Patient: {selectedPatientName}</p>
    </div>
  );
}

export default Patient1;