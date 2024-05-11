package com.examplehealthcare.healthcareplatform.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.examplehealthcare.healthcareplatform.model.Patient;
import com.examplehealthcare.healthcareplatform.service.PatientService;

@RestController
@RequestMapping("/api/patients")
public class PatientController {
    private final PatientService patientService;

    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    // Retrieve all patients
    @GetMapping
    public ResponseEntity<List<Patient>> getAllPatients() {
        List<Patient> patients = patientService.getAllPatients();
        return ResponseEntity.ok(patients);
    }

    // Retrieve a specific patient by their ID
    @GetMapping("/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable Long id) {
        Patient patient = patientService.getPatientById(id);
        return ResponseEntity.ok(patient);
    }

    // Create a new patient
    @PostMapping
    public ResponseEntity<Patient> createPatient(@RequestBody Patient newPatient) {
        Patient createdPatient = patientService.createPatient(newPatient);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPatient);
    }

    // Update an existing patient by their ID
    @PutMapping("/{id}")
    public ResponseEntity<Patient> updatePatient(@PathVariable Long id, @RequestBody Patient updatedPatient) {
        Patient patient = patientService.updatePatient(id, updatedPatient);
        return ResponseEntity.ok(patient);
    }

    // Delete a patient by their ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePatient(@PathVariable Long id) {
        patientService.deletePatient(id);
        return ResponseEntity.noContent().build();
    }
}
