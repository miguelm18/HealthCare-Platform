package com.examplehealthcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.examplehealthcare.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    
}
