package com.examplehealthcare.healthcareplatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examplehealthcare.healthcareplatform.model.HealthHistory;

public interface HealthHistoryRepository extends JpaRepository<HealthHistory, Long> {
    
}
 