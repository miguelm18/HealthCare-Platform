package com.examplehealthcare.healthcareplatform.service.impl;

//Exception class that inherits from Appointment Service in case of a Runtime Exception / Appointment Booking Exception 
public class SchedulingConflictException extends RuntimeException{ 
    public SchedulingConflictException(String message)
    {
        super(message);
    }
   
}
    

