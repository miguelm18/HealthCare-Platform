package com.examplehealthcare.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "HealthHistory")

public class HealthHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private Patient patient;

    @Column(name = "Blood Group")
    private String bloodGroup;

    @Column(name = "RH Factor")
    private String rhFactor;

    @Column(nullable = false)
    private String familyHistory;

    @Column(nullable = false)
    private String illness;

    @Column(nullable = false)
    private String description;
    
    public HealthHistory()
    {

    }

    public HealthHistory(Patient patient, String bloodGroup, String rhFactor, String familyHistory, String illness, String decription) {
        this.patient = patient;
        this.bloodGroup = bloodGroup;
        this.rhFactor = rhFactor;
        this.familyHistory = familyHistory;
        this.illness = illness;
        this.description = decription;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public String getFamilyHistory() {
        return familyHistory;
    }

    public void setFamilyHistory(String familyHistory) {
        this.familyHistory = familyHistory;
    }

    public String getIllness() {
        return illness;
    }

    public void setIllness(String illness) {
        this.illness = illness;
    }

    public String getDecription() {
        return description;
    }

    public void setDecription(String decription) {
        this.description = decription;
    }

    
}


