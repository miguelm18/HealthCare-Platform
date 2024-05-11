package com.examplehealthcare.healthcareplatform.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.examplehealthcare.healthcareplatform.model.Doctor;
import com.examplehealthcare.healthcareplatform.service.DoctorService;

@RestController
@RequestMapping("/api/doctors")
public class DoctorController {
    private final DoctorService doctorService;

    public DoctorController(DoctorService doctorService) {
        this.doctorService = doctorService;
    }

    @GetMapping
    public ResponseEntity<List<Doctor>> getAllDoctors() {
        List<Doctor> doctors = doctorService.findAllDoctors();
        return ResponseEntity.ok(doctors);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Doctor> getDoctorById(@PathVariable Long id) {
        Doctor doctor = doctorService.findDoctorById(id);
        return ResponseEntity.ok(doctor);
    }

    @PostMapping
    public ResponseEntity<Doctor> createDoctor(@RequestBody Doctor newDoctor) {
        Doctor createdDoctor = doctorService.saveDoctor(newDoctor);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDoctor);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Doctor> updateDoctor(@PathVariable Long id, @RequestBody Doctor updatedDoctor) {
        Doctor currentDoctor = doctorService.findDoctorById(id);
        if (currentDoctor != null) {
            currentDoctor.setName(updatedDoctor.getName());
            currentDoctor.setGender(updatedDoctor.getGender());
            currentDoctor.setSpecialty(updatedDoctor.getSpecialty());
            currentDoctor.setPhone(updatedDoctor.getPhone());
            currentDoctor.setEmail(updatedDoctor.getEmail());
            currentDoctor.setActiveStatus(updatedDoctor.getActiveStatus());
            Doctor updated = doctorService.saveDoctor(currentDoctor);
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDoctor(@PathVariable Long id) {
        doctorService.deleteDoctor(id);
        return ResponseEntity.noContent().build();
    }
}
