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

    public AdminServiceImpl(AdminRepository adminRepository)
    {
        this.adminRepository = adminRepository;
    }

    @Override
    public List<Admin> findAllAdmins()
    {
        return adminRepository.findAll();
    }

    @Override
    public Admin findAdminById(Long id)
    {
        return adminRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Admin not found with ID: " + id)); 
       }
    
    @Transactional
    public Admin saveAdmin(Admin admin)
    {
        return adminRepository.save(admin);
    }

    @Transactional
    public void deleteAdmin(Long id)
    {
        adminRepository.deleteById(id);
    }

    @Transactional
    public void deleteByName(String name)
    {
        adminRepository.deleteByName(name);
    }

}
