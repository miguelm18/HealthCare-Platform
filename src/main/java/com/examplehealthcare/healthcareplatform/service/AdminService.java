package com.examplehealthcare.healthcareplatform.service;

import java.util.List;
import com.examplehealthcare.healthcareplatform.model.Admin;

public interface AdminService { //Basic CRUD Operations for Admins 
    void deleteAdmin(Long id);
    void deleteByName(String name);
    List<Admin> getAllAdmins();
    Admin getAdminById(Long id);
    Admin createAdmin(Admin newAdmin);
    Admin updateAdmin(Long id, Admin updatedAdmin);
}


