package com.examplehealthcare.model;

import java.util.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class PatientInfo {

    @Column(name = "Image_Url", nullable = true)
    private String imageUrl;

    @Column(name = "First_Name", nullable = false)
    private String firstName;

    @Column(name = "Middle_Name", nullable = true)
    private String middleName;

    @Column(name = "Last_Name", nullable = false)
    private String lastName;

    @Column(name = "Marital_Status")
    private String maritalStatus;

    @Column(name = "Gender", nullable = false)
    private String gender;

    @Column(name = "Date_of_Birth", nullable = false)
    private Date dob;


    public PatientInfo() {

    }

    public PatientInfo(String imageUrl, String firstName, String middleName, String lastName, String maritalStatus, String gender, Date dob) {
        this.imageUrl = imageUrl;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.maritalStatus = maritalStatus;
        this.gender = gender;
        this.dob = dob;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMaritalStatus() {
        return maritalStatus;
    }

    public void setMaritalStatus(String maritalStatus) {
        this.maritalStatus = maritalStatus;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    @Override
    public String toString() {
        return "PatientInfo [imageUrl=" + imageUrl + ", firstName=" + firstName + ", middleName=" + middleName
                + ", lastName=" + lastName + ", maritalStatus=" + maritalStatus + ", gender=" + gender + ", dob=" + dob
                + "]";
    }

    
}


