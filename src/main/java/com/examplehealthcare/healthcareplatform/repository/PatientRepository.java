package com.examplehealthcare.healthcareplatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examplehealthcare.healthcareplatform.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {
    
}
