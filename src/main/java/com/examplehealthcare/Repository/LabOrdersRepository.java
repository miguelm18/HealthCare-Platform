package com.examplehealthcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examplehealthcare.model.LabOrders;

public interface LabOrdersRepository extends JpaRepository<LabOrders, Long>{
    
}
