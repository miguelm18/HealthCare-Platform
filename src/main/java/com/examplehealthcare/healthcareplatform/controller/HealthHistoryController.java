package com.examplehealthcare.healthcareplatform.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.examplehealthcare.healthcareplatform.model.HealthHistory;
import com.examplehealthcare.healthcareplatform.service.HealthHistoryService;

@RestController
@RequestMapping("/api/healthHistories")
public class HealthHistoryController {
    private final HealthHistoryService healthHistoryService;

    public HealthHistoryController(HealthHistoryService healthHistoryService) {
        this.healthHistoryService = healthHistoryService;
    }

    @GetMapping
    public ResponseEntity<List<HealthHistory>> getAllHealthHistories() {
        List<HealthHistory> healthHistories = healthHistoryService.findAllHealthHistories();
        return ResponseEntity.ok(healthHistories);
    }

    @GetMapping("/{id}")
    public ResponseEntity<HealthHistory> getHealthHistoryById(@PathVariable Long id) {
        HealthHistory healthHistory = healthHistoryService.findHealthHistoryById(id);
        return ResponseEntity.ok(healthHistory);
    }

    @PostMapping
    public ResponseEntity<HealthHistory> createHealthHistory(@RequestBody HealthHistory newHealthHistory) {
        HealthHistory createdHealthHistory = healthHistoryService.saveHealthHistory(newHealthHistory);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdHealthHistory);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HealthHistory> updateHealthHistory(@PathVariable Long id, @RequestBody HealthHistory updatedHealthHistory) {
        HealthHistory currentHealthHistory = healthHistoryService.findHealthHistoryById(id);
        if (currentHealthHistory != null) {
            currentHealthHistory.setBloodGroup(updatedHealthHistory.getBloodGroup());
            currentHealthHistory.setRhFactor(updatedHealthHistory.getRhFactor());
            currentHealthHistory.setFamilyHistory(updatedHealthHistory.getFamilyHistory());
            currentHealthHistory.setIllness(updatedHealthHistory.getIllness());
            currentHealthHistory.setDescription(updatedHealthHistory.getDescription());
            HealthHistory updated = healthHistoryService.saveHealthHistory(currentHealthHistory);
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHealthHistory(@PathVariable Long id) {
        healthHistoryService.deleteHealthHistory(id);
        return ResponseEntity.noContent().build();
    }
}
