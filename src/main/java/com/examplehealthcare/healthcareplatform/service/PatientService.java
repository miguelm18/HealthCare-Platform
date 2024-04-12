package com.examplehealthcare.healthcareplatform.service;

import java.util.List;

import com.examplehealthcare.healthcareplatform.model.Patient;

public interface PatientService {
    List<Patient> findAllPatients();
    Patient findPatientById(Long id);
    Patient savePatient(Patient patient);
    void deletePatient(Long id);
}

