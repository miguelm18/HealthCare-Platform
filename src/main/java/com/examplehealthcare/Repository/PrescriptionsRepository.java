package com.examplehealthcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.examplehealthcare.model.Prescriptions;

public interface PrescriptionsRepository extends JpaRepository<Prescriptions, Long> {
    
}
