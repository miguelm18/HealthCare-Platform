package com.examplehealthcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examplehealthcare.model.Nurse;

public interface NurseRepository extends JpaRepository<Nurse, Long>{
    
}
