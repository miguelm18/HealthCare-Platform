package com.examplehealthcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examplehealthcare.model.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    
}
