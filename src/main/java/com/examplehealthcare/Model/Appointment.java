package com.examplehealthcare.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

//navigates appointments with an id key, doctor(an or nurse), patient , time, and date

@Entity
@Table(name = "Appointments")
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long appointmentId;

    @ManyToOne
    @JoinColumn(name = "doctor_id", nullable = false)
    private Doctor doctor;

    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private Patient patient;

    @Column(nullable = false)
    private Date doa;
    @Column(nullable = false)
    private String appointmentTime;
    @Column(nullable = false)
    private Boolean status;

    public Appointment()
    {

    }

    public Appointment(Doctor doctor, Patient patient, Date doa, String appointmentTime, Boolean status) {
        this.doctor = doctor;
        this.patient = patient;
        this.doa = doa;
        this.appointmentTime = appointmentTime;
        this.status = status;
    }

    public Long getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(Long appointmentId) {
        this.appointmentId = appointmentId;
    }

    public Doctor getDoctor() {
        return doctor;
    }


    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }


    public Patient getPatient() {
        return patient;
    }


    public void setPatient(Patient patient) {
        this.patient = patient;
    }


    public Date getDoa() {
        return doa;
    }


    public void setDoa(Date doa) {
        this.doa = doa;
    }


    public String getAppointmentTime() {
        return appointmentTime;
    }


    public void setAppointmentTime(String appointmentTime) {
        this.appointmentTime = appointmentTime;
    }


    public Boolean getStatus() {
        return status;
    }


    public void setStatus(Boolean status) {
        this.status = status;
    }

    
    
}
