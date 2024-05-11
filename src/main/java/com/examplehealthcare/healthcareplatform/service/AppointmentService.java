package com.examplehealthcare.healthcareplatform.service;

import java.util.Date;
import java.util.List;
import com.examplehealthcare.healthcareplatform.model.Appointment;
import com.examplehealthcare.healthcareplatform.service.impl.SchedulingConflictException;

public interface AppointmentService {
    List<Appointment> findAllAppointments();
    Appointment findAppointmentById(Long id);
    Appointment createAppointment(Appointment appointment) throws SchedulingConflictException;
    Appointment updateAppointment(Long id, Appointment updatedAppointment) throws SchedulingConflictException;
    void deleteAppointment(Long id);
    List<Appointment> findByDoctorAndDOAAndAppointmentTime(Long doctorId, Date doa, String appointmentTime);
}
