package com.examplehealthcare.healthcareplatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examplehealthcare.healthcareplatform.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    
}
