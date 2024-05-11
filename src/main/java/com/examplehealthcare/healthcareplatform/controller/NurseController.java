package com.examplehealthcare.healthcareplatform.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.examplehealthcare.healthcareplatform.model.Nurse;
import com.examplehealthcare.healthcareplatform.service.NurseService;

@RestController
@RequestMapping("/api/nurses")
public class NurseController {
    private final NurseService nurseService;

    public NurseController(NurseService nurseService) {
        this.nurseService = nurseService;
    }

    @GetMapping
    public ResponseEntity<List<Nurse>> getAllNurses() {
        List<Nurse> nurses = nurseService.findAllNurses();
        return ResponseEntity.ok(nurses);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Nurse> getNurseById(@PathVariable Long id) {
        Nurse nurse = nurseService.findNurseById(id);
        return ResponseEntity.ok(nurse);
    }

    @PostMapping
    public ResponseEntity<Nurse> createNurse(@RequestBody Nurse newNurse) {
        Nurse createdNurse = nurseService.saveNurse(newNurse);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdNurse);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Nurse> updateNurse(@PathVariable Long id, @RequestBody Nurse updatedNurse) {
        Nurse currentNurse = nurseService.findNurseById(id);
        if (currentNurse != null) {
            currentNurse.setName(updatedNurse.getName());
            currentNurse.setGender(updatedNurse.getGender());
            currentNurse.setSpecialty(updatedNurse.getSpecialty());
            currentNurse.setPhone(updatedNurse.getPhone());
            currentNurse.setEmail(updatedNurse.getEmail());
            currentNurse.setActiveStatus(updatedNurse.getActiveStatus());
            Nurse updated = nurseService.saveNurse(currentNurse);
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNurse(@PathVariable Long id) {
        nurseService.deleteNurse(id);
        return ResponseEntity.noContent().build();
    }
}
