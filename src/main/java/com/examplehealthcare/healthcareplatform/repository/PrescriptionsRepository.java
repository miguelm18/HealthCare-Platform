package com.examplehealthcare.healthcareplatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examplehealthcare.healthcareplatform.model.Prescriptions;

public interface PrescriptionsRepository extends JpaRepository<Prescriptions, Long> {
    
}
 