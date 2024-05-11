package com.examplehealthcare.healthcareplatform.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.examplehealthcare.healthcareplatform.model.Prescriptions;
import com.examplehealthcare.healthcareplatform.service.PrescriptionsService;

@RestController
@RequestMapping("/api/prescriptions")
public class PrescriptionsController {
    private final PrescriptionsService prescriptionsService;

    public PrescriptionsController(PrescriptionsService prescriptionsService) {
        this.prescriptionsService = prescriptionsService;
    }

    @GetMapping
    public ResponseEntity<List<Prescriptions>> getAllPrescriptions() {
        List<Prescriptions> prescriptions = prescriptionsService.findAllPrescriptions();
        return ResponseEntity.ok(prescriptions);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Prescriptions> getPrescriptionById(@PathVariable Long id) {
        Prescriptions prescription = prescriptionsService.findPrescriptionById(id);
        return ResponseEntity.ok(prescription);
    }

    @PostMapping
    public ResponseEntity<Prescriptions> createPrescription(@RequestBody Prescriptions newPrescription) {
        Prescriptions createdPrescription = prescriptionsService.savePrescription(newPrescription);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPrescription);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Prescriptions> updatePrescription(@PathVariable Long id, @RequestBody Prescriptions updatedPrescription) {
        Prescriptions currentPrescription = prescriptionsService.findPrescriptionById(id);
        if (currentPrescription != null) {
            currentPrescription.setMedicationName(updatedPrescription.getMedicationName());
            currentPrescription.setDosage(updatedPrescription.getDosage());
            currentPrescription.setFrequency(updatedPrescription.getFrequency());
            currentPrescription.setStartDate(updatedPrescription.getStartDate());
            currentPrescription.setEndDate(updatedPrescription.getEndDate());
            currentPrescription.setPrescribingDoctor(updatedPrescription.getPrescribingDoctor());
            Prescriptions updated = prescriptionsService.savePrescription(currentPrescription);
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePrescription(@PathVariable Long id) {
        prescriptionsService.deletePrescription(id);
        return ResponseEntity.noContent().build();
    }
}
