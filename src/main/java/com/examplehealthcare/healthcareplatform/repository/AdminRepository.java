package com.examplehealthcare.healthcareplatform.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examplehealthcare.healthcareplatform.model.Admin;

public interface AdminRepository extends JpaRepository< Admin, Long > {
    void deleteByName(String name);
    List<Admin> findByName(String name);
}
 