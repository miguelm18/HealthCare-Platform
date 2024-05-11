package com.examplehealthcare.healthcareplatform.service;

import java.util.List;
import com.examplehealthcare.healthcareplatform.model.Doctor;

public interface DoctorService {
    List<Doctor> findAllDoctors();
    Doctor findDoctorById(Long id);
    Doctor saveDoctor(Doctor doctor);
    void deleteDoctor(Long id);
}
