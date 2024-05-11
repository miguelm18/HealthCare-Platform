package com.examplehealthcare.healthcareplatform.service.impl;

import java.util.List;
import org.springframework.stereotype.Service;
import com.examplehealthcare.healthcareplatform.model.Doctor;
import com.examplehealthcare.healthcareplatform.repository.DoctorRepository;
import com.examplehealthcare.healthcareplatform.service.DoctorService;
import jakarta.transaction.Transactional;

@Service
public class DoctorServiceImpl implements DoctorService {

    private final DoctorRepository doctorRepository;

    public DoctorServiceImpl(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    @Override
    @Transactional
    public List<Doctor> findAllDoctors() {
        return doctorRepository.findAll();
    }

    @Override
    @Transactional
    public Doctor findDoctorById(Long id) {
        return doctorRepository.findById(id).orElseThrow(() -> new RuntimeException("Doctor not found with ID: " + id));
    }

    @Override
    @Transactional
    public Doctor saveDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    @Override
    @Transactional
    public void deleteDoctor(Long id) {
        doctorRepository.deleteById(id);
    }
}
