package com.examplehealthcare.healthcareplatform.service.impl;

import java.util.List;

import com.examplehealthcare.healthcareplatform.model.Patient;
import com.examplehealthcare.healthcareplatform.repository.PatientRepository;
import com.examplehealthcare.healthcareplatform.service.PatientService;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientServiceImpl implements PatientService {

    private final PatientRepository patientRepository;

    @Autowired
    public PatientServiceImpl(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @Override
    @Transactional
    public List<Patient> findAllPatients() {
        return patientRepository.findAll();
    }

    @Override
    @Transactional
    public Patient findPatientById(Long id) {
        return patientRepository.findById(id).orElse(null);
    }

    @Override
    @Transactional
    public Patient savePatient(Patient patient) {
        return patientRepository.save(patient);
    }

    @Override
    @Transactional
    public void deletePatient(Long id) {
        patientRepository.deleteById(id);
    }
}