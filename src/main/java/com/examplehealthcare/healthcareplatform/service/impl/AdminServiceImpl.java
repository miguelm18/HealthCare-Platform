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
    
    //Admin service implments from the admin repository
    private final AdminRepository adminRepository;

    public AdminServiceImpl(AdminRepository adminRepository)
    {
        this.adminRepository = adminRepository;
    }

    @Override //read the list of admins
    public List<Admin> findAllAdmins()
    {
        return adminRepository.findAll();
    }

    @Override //reads the specific admin by id
    public Admin findAdminById(Long id)
    {
        return adminRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Admin not found with ID: " + id)); 
       }
    
    @Transactional //saves an admin 
    public Admin saveAdmin(Admin admin)
    {
        return adminRepository.save(admin);
    }

    @Transactional //deletes an admin 
    public void deleteAdmin(Long id)
    {
        adminRepository.deleteById(id);
    }

    @Transactional //deletes an admin by name 
    public void deleteByName(String name)
    {
        adminRepository.deleteByName(name);
    }

}
