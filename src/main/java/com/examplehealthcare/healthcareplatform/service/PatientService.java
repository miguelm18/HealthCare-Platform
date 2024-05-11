package com.examplehealthcare.healthcareplatform.service;

import java.util.List;
import com.examplehealthcare.healthcareplatform.model.Patient;

public interface PatientService {
    List<Patient> getAllPatients();
    Patient getPatientById(Long id);
    Patient createPatient(Patient newPatient);
    Patient updatePatient(Long id, Patient updatedPatient);
    void deletePatient(Long id);
}
