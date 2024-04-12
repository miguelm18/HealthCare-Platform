package com.examplehealthcare.healthcareplatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examplehealthcare.healthcareplatform.model.Admin;

public interface AdminRepository extends JpaRepository< Admin, Long > {
    void deleteByName(String name);
}
