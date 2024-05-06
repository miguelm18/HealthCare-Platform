package com.examplehealthcare.healthcareplatform.repository;

import java.util.Date;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.examplehealthcare.healthcareplatform.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByDoctorIdAndDoaAndAppointmentTime(Long doctor, Date doa, String appointmentTime);
}

