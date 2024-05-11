package com.examplehealthcare.healthcareplatform.model;

import java.util.List;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
 
@Entity
@Table(name = "Patients")


public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long patientId;

    @Embedded
    private PatientInfo patientInfo;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String emergencyContact;

    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
    private List<Appointment> appointment;

    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<HealthHistory> healthHistory;

    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Diagnosis> diagnoses;



    public Patient()
    {

    }

    public Patient(PatientInfo patientInfo, String phone, String email, String emergencyContact,
            List<Appointment> appointment, List<HealthHistory> healthHistory, List<Diagnosis> diagnoses) {
        this.patientInfo = patientInfo;
        this.phone = phone;
        this.email = email;
        this.emergencyContact = emergencyContact;
        this.appointment = appointment;
        this.healthHistory = healthHistory;
        this.diagnoses = diagnoses;
    }

    public Long getPatientId() {
        return patientId;
    }

    public void setPatientId(Long patientId) {
        this.patientId = patientId;
    }

    public PatientInfo getPatientInfo() {
        return patientInfo;
    }

    public void setPatientInfo(PatientInfo patientInfo) {
        this.patientInfo = patientInfo;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmergencyContact() {
        return emergencyContact;
    }

    public void setEmergencyContact(String emergencyContact) {
        this.emergencyContact = emergencyContact;
    }

    public List<Appointment> getAppointment() {
        return appointment;
    }

    public void setAppointment(List<Appointment> appointment) {
        this.appointment = appointment;
    }

    public List<HealthHistory> getHealthHistory() {
        return healthHistory;
    }

    public void setHealthHistory(List<HealthHistory> healthHistory) {
        this.healthHistory = healthHistory;
    }

    public List<Diagnosis> getDiagnoses() {
        return diagnoses;
    }

    public void setDiagnoses(List<Diagnosis> diagnoses) {
        this.diagnoses = diagnoses;
    }
    
    @Override
    public String toString() {
        return "Patient [patientId=" + patientId + ", patientInfo=" + patientInfo + ", phone=" + phone + ", email="
                + email + ", emergencyContact=" + emergencyContact + ", appointment=" + appointment + ", healthHistory="
                + healthHistory + "]";
    }


    
}
