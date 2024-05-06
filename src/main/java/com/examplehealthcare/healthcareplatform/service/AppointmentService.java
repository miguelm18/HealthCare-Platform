package com.examplehealthcare.healthcareplatform.service;

import java.util.Date;
import java.util.List;

import com.examplehealthcare.healthcareplatform.model.Appointment;
import com.examplehealthcare.healthcareplatform.service.impl.SchedulingConflictException;

public interface AppointmentService { //Basic CRUD Operations for Appointmensts 
    List<Appointment> findAllAppointments();
    Appointment findAppointmentById(Long id);
    Appointment saveAppointment(Appointment appointment) throws SchedulingConflictException;
    void deleteAppointment(Long id);
    List<Appointment> findByDoctorAndDOAAndAppointmentTime(Long doctor, Date doa, String appointmentTime);


}
