package com.examplehealthcare.healthcareplatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examplehealthcare.healthcareplatform.model.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    
}
 