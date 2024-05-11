package com.examplehealthcare.healthcareplatform.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "HealthHistory")
 
public class HealthHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private Patient patient;

    @Column(name = "blood_group")
    private String bloodGroup;

    @Column(name = "rh_factor")
    private String rhFactor;

    @Column(name = "family_history", nullable = false)
    private String familyHistory;

    @Column(name = "illness", nullable = false)
    private String illness;

    @Column(name = "description", nullable = false)
    private String description;
    

    public HealthHistory(Patient patient, String bloodGroup, String rhFactor, String familyHistory, String illness, String decription) {
        this.patient = patient;
        this.bloodGroup = bloodGroup;
        this.rhFactor = rhFactor;
        this.familyHistory = familyHistory;
        this.illness = illness;
        this.description = decription;
    }
    
}


