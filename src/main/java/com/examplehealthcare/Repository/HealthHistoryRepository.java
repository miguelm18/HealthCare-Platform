package com.examplehealthcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examplehealthcare.model.HealthHistory;

public interface HealthHistoryRepository extends JpaRepository<HealthHistory, Long> {
    
}
