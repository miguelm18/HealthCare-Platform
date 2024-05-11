package com.examplehealthcare.healthcareplatform.service.impl;

import java.util.List;
import org.springframework.stereotype.Service;
import com.examplehealthcare.healthcareplatform.model.Patient;
import com.examplehealthcare.healthcareplatform.repository.PatientRepository;
import com.examplehealthcare.healthcareplatform.service.PatientService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class PatientServiceImpl implements PatientService {

    private final PatientRepository patientRepository;

    public PatientServiceImpl(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    // Retrieve all patients
    @Override
    @Transactional
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    // Retrieve a patient by their ID
    @Override
    @Transactional
    public Patient getPatientById(Long id) {
        return patientRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Patient not found with ID: " + id));
    }

    // Create a new patient
    @Override
    @Transactional
    public Patient createPatient(Patient newPatient) {
        return patientRepository.save(newPatient);
    }

    // Update an existing patient
    @Override
    @Transactional
    public Patient updatePatient(Long id, Patient updatedPatient) {
        Patient existingPatient = getPatientById(id);
        existingPatient.setPatientInfo(updatedPatient.getPatientInfo());
        existingPatient.setPhone(updatedPatient.getPhone());
        existingPatient.setEmail(updatedPatient.getEmail());
        existingPatient.setEmergencyContact(updatedPatient.getEmergencyContact());
        existingPatient.setAppointment(updatedPatient.getAppointment());
        existingPatient.setHealthHistory(updatedPatient.getHealthHistory());
        existingPatient.setDiagnoses(updatedPatient.getDiagnoses());
        return patientRepository.save(existingPatient);
    }

    // Delete a patient by their ID
    @Override
    @Transactional
    public void deletePatient(Long id) {
        if (!patientRepository.existsById(id)) {
            throw new EntityNotFoundException("Patient not found with ID: " + id);
        }
        patientRepository.deleteById(id);
    }
}
