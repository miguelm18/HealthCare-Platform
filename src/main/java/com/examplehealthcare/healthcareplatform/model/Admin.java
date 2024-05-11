package com.examplehealthcare.healthcareplatform.model;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "Admin")
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name ="name",nullable = false)
    private String name;

    @Column(name = "gender", nullable = false)
    private String gender;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "title", nullable = false)
    private String title;

public Admin(String name, String gender, String email, String password, String title)
{
    this.name = name;
    this.gender = gender;
    this.email = email;
    setPassword(password);
    this.title = title;
}


public String getPassword() {
    return password;
}

public void setPassword(String password) {
    this.password = new BCryptPasswordEncoder().encode(password);
}


    
}
