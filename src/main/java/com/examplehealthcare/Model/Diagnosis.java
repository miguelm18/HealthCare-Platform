package com.examplehealthcare.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "Diagnoses")

    public class Diagnosis {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "patient_id")
    private Long patientId; // Consider using @ManyToOne for direct entity mapping

    @Column(name = "diagnosis_code")
    private String diagnosisCode;

    @Column(name = "description")
    private String description;

    @Temporal(TemporalType.DATE)
    @Column(name = "diagnosis_date")
    private Date diagnosisDate;

    @Column(name = "severity")
    private String severity;

    @Column(name = "is_current")
    private boolean isCurrent;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPatientId() {
        return patientId;
    }

    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }

    public String getDiagnosisCode() {
        return diagnosisCode;
    }

    public void setDiagnosisCode(String diagnosisCode) {
        this.diagnosisCode = diagnosisCode;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDiagnosisDate() {
        return diagnosisDate;
    }

    public void setDiagnosisDate(Date diagnosisDate) {
        this.diagnosisDate = diagnosisDate;
    }

    public String getSeverity() {
        return severity;
    }

    public void setSeverity(String severity) {
        this.severity = severity;
    }

    public boolean isCurrent() {
        return isCurrent;
    }

    public void setCurrent(boolean isCurrent) {
        this.isCurrent = isCurrent;
    }

    
}


