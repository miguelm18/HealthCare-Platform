package com.examplehealthcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examplehealthcare.model.Diagnosis;

public interface DiagnosisRepository extends JpaRepository<Diagnosis, Long> {
    
}
