package com.examplehealthcare.healthcareplatform.service.impl;

import com.examplehealthcare.healthcareplatform.service.DoctorService;

import jakarta.transaction.Transactional;

import java.util.List;

import com.examplehealthcare.healthcareplatform.model.Doctor;
import com.examplehealthcare.healthcareplatform.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorServiceImpl implements DoctorService {

    private final DoctorRepository doctorRepository;

    @Autowired
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
        return doctorRepository.findById(id).orElse(null);
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