package com.examplehealthcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examplehealthcare.model.Admin;

public interface AdminRepository extends JpaRepository< Admin, Long > {
    
}
