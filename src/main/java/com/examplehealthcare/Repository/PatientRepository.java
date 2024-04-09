package com.examplehealthcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examplehealthcare.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {
    
}
