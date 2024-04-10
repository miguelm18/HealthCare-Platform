package com.examplehealthcare.healthcareplatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examplehealthcare.healthcareplatform.model.Nurse;

public interface NurseRepository extends JpaRepository<Nurse, Long>{
    
}
