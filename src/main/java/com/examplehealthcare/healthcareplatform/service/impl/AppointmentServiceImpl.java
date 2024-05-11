package com.examplehealthcare.healthcareplatform.service.impl;

import java.util.Date;
import java.util.List;
import org.springframework.stereotype.Service;
import com.examplehealthcare.healthcareplatform.model.Appointment;
import com.examplehealthcare.healthcareplatform.repository.AppointmentRepository;
import com.examplehealthcare.healthcareplatform.service.AppointmentService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    private final AppointmentRepository appointmentRepository;

    public AppointmentServiceImpl(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    @Override
    @Transactional
    public List<Appointment> findAllAppointments() {
        return appointmentRepository.findAll();
    }

    @Override
    @Transactional
    public Appointment findAppointmentById(Long id) {
        return appointmentRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Appointment not found with ID: " + id));
    }

    @Override
    @Transactional
    public Appointment createAppointment(Appointment newAppointment) {
        // Additional logic to check for scheduling conflicts might be added here
        return appointmentRepository.save(newAppointment);
    }

    @Override
    @Transactional
    public Appointment updateAppointment(Long id, Appointment updatedAppointment) {
        Appointment existingAppointment = findAppointmentById(id);
        // Assuming set methods exist to update all fields
        existingAppointment.setDoctor(updatedAppointment.getDoctor());
        existingAppointment.setPatient(updatedAppointment.getPatient());
        existingAppointment.setNurse(updatedAppointment.getNurse());
        existingAppointment.setDoa(updatedAppointment.getDoa());
        existingAppointment.setAppointmentTime(updatedAppointment.getAppointmentTime());
        existingAppointment.setStatus(updatedAppointment.getStatus());
        return appointmentRepository.save(existingAppointment);
    }

    @Override
    @Transactional
    public void deleteAppointment(Long id) {
        if (!appointmentRepository.existsById(id)) {
            throw new EntityNotFoundException("Appointment not found with ID: " + id);
        }
        appointmentRepository.deleteById(id);
    }

    @Override
    public List<Appointment> findByDoctorAndDOAAndAppointmentTime(Long doctorId, Date doa, String appointmentTime) {
        return appointmentRepository.findByDoctorIdAndDoaAndAppointmentTime(doctorId, doa, appointmentTime);
    }
}
