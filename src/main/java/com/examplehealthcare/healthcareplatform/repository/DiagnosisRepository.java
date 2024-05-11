package com.examplehealthcare.healthcareplatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examplehealthcare.healthcareplatform.model.Diagnosis;

public interface DiagnosisRepository extends JpaRepository<Diagnosis, Long> {
    
}
 