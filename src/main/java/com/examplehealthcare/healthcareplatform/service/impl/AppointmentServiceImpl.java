package com.examplehealthcare.healthcareplatform.service.impl;

import java.util.Date;
import java.util.List;

import com.examplehealthcare.healthcareplatform.model.Appointment;
import com.examplehealthcare.healthcareplatform.repository.AppointmentRepository;
import com.examplehealthcare.healthcareplatform.service.AppointmentService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

public class AppointmentServiceImpl implements AppointmentService {
    
    //service implements from the repository layer methods 
    private final AppointmentRepository appointmentRepository;

    public AppointmentServiceImpl(AppointmentRepository appointmentRepository)
    {
        this.appointmentRepository = appointmentRepository;
    }

    @Override //read operation
    public List<Appointment> findAllAppointments()
    {
        return appointmentRepository.findAll();
    }

    @Override //find operation
    public Appointment findAppointmentById(Long id)
    {
        return appointmentRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Appointment not found with ID: " + id)); 
    }
    @Override
    public List<Appointment> findByDoctorAndDOAAndAppointmentTime(Long doctorId, Date doa, String appointmentTime) 
    {
        return appointmentRepository.findByDoctorIdAndDoaAndAppointmentTime(doctorId, doa, appointmentTime);
    }
    

    
    @Transactional //save and update operation - checks to see if there are no conflicts with scheduling
    public Appointment saveAppointment(Appointment appointment) throws SchedulingConflictException {
    if (hasSchedulingConflict(appointment)) 
    {
        throw new SchedulingConflictException("Appointment conflicts with existing bookings.");
    }
    return appointmentRepository.save(appointment);
    }

    //confirms if there is a conflict by checking the doctor/date of appointment, and time 
    private boolean hasSchedulingConflict(Appointment newAppointment) 
    {
        List<Appointment> existingAppointments = appointmentRepository.findByDoctorIdAndDoaAndAppointmentTime(
        newAppointment.getDoctor().getId(),
        newAppointment.getDoa(),
        newAppointment.getAppointmentTime()
        );
        return !existingAppointments.isEmpty();
    }

    //deletes an appointment 
    @Transactional
    public void deleteAppointment(Long id)
    {
        appointmentRepository.deleteById(id);
    }

}
