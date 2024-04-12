package com.examplehealthcare.healthcareplatform.service;

import java.util.List;

import com.examplehealthcare.healthcareplatform.model.Appointment;

public interface AppointmentService {
    List<Appointment> findAllAppointments();
    Appointment findAppointmentById(Long id);
    Appointment saveAppointment(Appointment appointment);
    void deleteAppointment(Long id);
}
