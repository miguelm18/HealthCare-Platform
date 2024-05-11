package com.examplehealthcare.healthcareplatform.service.impl;

import java.util.List;
import org.springframework.stereotype.Service;
import com.examplehealthcare.healthcareplatform.model.Admin;
import com.examplehealthcare.healthcareplatform.repository.AdminRepository;
import com.examplehealthcare.healthcareplatform.service.AdminService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class AdminServiceImpl implements AdminService {
    
    private final AdminRepository adminRepository;

    public AdminServiceImpl(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    // Retrieve all admins
    @Override
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    // Retrieve an admin by their ID
    @Override
    public Admin getAdminById(Long id) {
        return adminRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("Admin not found with ID: " + id));
    }

    // Create a new admin
    @Override
    @Transactional
    public Admin createAdmin(Admin newAdmin) {
        return adminRepository.save(newAdmin);
    }

    // Update an existing admin
    @Override
    @Transactional
    public Admin updateAdmin(Long id, Admin updatedAdmin) {
        Admin existingAdmin = getAdminById(id);
        existingAdmin.setName(updatedAdmin.getName());
        existingAdmin.setEmail(updatedAdmin.getEmail());
        existingAdmin.setGender(updatedAdmin.getGender());
        existingAdmin.setTitle(updatedAdmin.getTitle());
        // Password management requires special care; ensure secure handling
        if (updatedAdmin.getPassword() != null) {
            existingAdmin.setPassword(updatedAdmin.getPassword());
        }
        return adminRepository.save(existingAdmin);
    }

    // Delete an admin by their ID
    @Override
    @Transactional
    public void deleteAdmin(Long id) {
        if (!adminRepository.existsById(id)) {
            throw new EntityNotFoundException("Admin not found with ID: " + id);
        }
        adminRepository.deleteById(id);
    }

    // Delete an admin by name
    @Override
    @Transactional
    public void deleteByName(String name) {
        List<Admin> adminsToDelete = adminRepository.findByName(name);
        if (adminsToDelete.isEmpty()) {
            throw new EntityNotFoundException("No admin found with the name: " + name);
        }
        adminRepository.deleteAll(adminsToDelete);
    }

}
 