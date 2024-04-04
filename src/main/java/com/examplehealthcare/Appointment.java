package com.examplehealthcare;

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
    private Long appointment_id;

    @ManyToOne
    @JoinColumn(name = "doctor_id", nullable = false)
    private Doctor doctor;

    @ManyToOne
    @JoinColumn(name = "patient_id", nullable = false)
    private Patient patient;

    @Column(nullable = false)
    private Date doa;
    @Column(nullable = false)
    private String appointment_time;
    @Column(nullable = false)
    private Boolean status;

    public Appointment()
    {

    }

    public Appointment(Doctor doctor, Patient patient, Date doa, String appointment_time, Boolean status) {
        this.doctor = doctor;
        this.patient = patient;
        this.doa = doa;
        this.appointment_time = appointment_time;
        this.status = status;
    }

    public Long getAppointment_id() {
        return appointment_id;
    }

    public void setAppointment_id(Long appointment_id) {
        this.appointment_id = appointment_id;
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


    public String getAppointment_time() {
        return appointment_time;
    }


    public void setAppointment_time(String appointment_time) {
        this.appointment_time = appointment_time;
    }


    public Boolean getStatus() {
        return status;
    }


    public void setStatus(Boolean status) {
        this.status = status;
    }

    
    
}
