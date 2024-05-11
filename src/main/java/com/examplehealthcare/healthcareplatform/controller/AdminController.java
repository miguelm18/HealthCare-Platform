package com.examplehealthcare.healthcareplatform.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.examplehealthcare.healthcareplatform.model.Admin;
import com.examplehealthcare.healthcareplatform.service.AdminService;

import java.util.List;

@RestController
@RequestMapping("/api/admins")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    // Retrieve all admins
    @GetMapping
    public ResponseEntity<List<Admin>> getAllAdmins() {
        List<Admin> admins = adminService.getAllAdmins();
        return ResponseEntity.ok(admins);
    }

    // Retrieve a specific admin by their ID
    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable Long id) {
        Admin admin = adminService.getAdminById(id);
        return ResponseEntity.ok(admin);
    }

    // Create a new admin
    @PostMapping
    public ResponseEntity<Admin> createAdmin(@RequestBody Admin newAdmin) {
        Admin createdAdmin = adminService.createAdmin(newAdmin);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAdmin);
    }

    // Update an existing admin by their ID
    @PutMapping("/{id}")
    public ResponseEntity<Admin> updateAdmin(@PathVariable Long id, @RequestBody Admin updatedAdmin) {
        Admin admin = adminService.updateAdmin(id, updatedAdmin);
        return ResponseEntity.ok(admin);
    }

    // Delete a specific admin by their ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmin(@PathVariable Long id) {
        adminService.deleteAdmin(id);
        return ResponseEntity.noContent().build();
    }

    // Delete admins by name
    @DeleteMapping("/name/{name}")
    public ResponseEntity<Void> deleteByName(@PathVariable String name) {
        adminService.deleteByName(name);
        return ResponseEntity.noContent().build();
    }
}
