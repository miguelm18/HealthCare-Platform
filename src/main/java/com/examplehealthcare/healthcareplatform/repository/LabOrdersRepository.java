package com.examplehealthcare.healthcareplatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examplehealthcare.healthcareplatform.model.LabOrders;

public interface LabOrdersRepository extends JpaRepository<LabOrders, Long>{
    
}
