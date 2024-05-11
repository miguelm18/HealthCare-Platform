package com.examplehealthcare.healthcareplatform.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.examplehealthcare.healthcareplatform.model.Diagnosis;
import com.examplehealthcare.healthcareplatform.service.DiagnosisService;

@RestController
@RequestMapping("/api/diagnoses")
public class DiagnosisController {
    private final DiagnosisService diagnosisService;

    public DiagnosisController(DiagnosisService diagnosisService) {
        this.diagnosisService = diagnosisService;
    }

    @GetMapping
    public ResponseEntity<List<Diagnosis>> getAllDiagnoses() {
        List<Diagnosis> diagnoses = diagnosisService.findAllDiagnoses();
        return ResponseEntity.ok(diagnoses);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Diagnosis> getDiagnosisById(@PathVariable Long id) {
        Diagnosis diagnosis = diagnosisService.findDiagnosisById(id);
        return ResponseEntity.ok(diagnosis);
    }

    @PostMapping
    public ResponseEntity<Diagnosis> createDiagnosis(@RequestBody Diagnosis newDiagnosis) {
        Diagnosis createdDiagnosis = diagnosisService.saveDiagnosis(newDiagnosis);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDiagnosis);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Diagnosis> updateDiagnosis(@PathVariable Long id, @RequestBody Diagnosis updatedDiagnosis) {
        Diagnosis diagnosis = diagnosisService.findDiagnosisById(id);
        if (diagnosis != null) {
            diagnosis.setDiagnosisCode(updatedDiagnosis.getDiagnosisCode());
            diagnosis.setDescription(updatedDiagnosis.getDescription());
            diagnosis.setDiagnosisDate(updatedDiagnosis.getDiagnosisDate());
            diagnosis.setSeverity(updatedDiagnosis.getSeverity());
            diagnosis.setCurrent(updatedDiagnosis.isCurrent());
            Diagnosis updated = diagnosisService.saveDiagnosis(diagnosis);
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDiagnosis(@PathVariable Long id) {
        diagnosisService.deleteDiagnosis(id);
        return ResponseEntity.noContent().build();
    }
}
