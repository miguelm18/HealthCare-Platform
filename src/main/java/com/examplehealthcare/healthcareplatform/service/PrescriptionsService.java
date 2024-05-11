package com.examplehealthcare.healthcareplatform.service;

import java.util.List;
import com.examplehealthcare.healthcareplatform.model.Prescriptions;

public interface PrescriptionsService {
    List<Prescriptions> findAllPrescriptions();
    Prescriptions findPrescriptionById(Long id);
    Prescriptions savePrescription(Prescriptions prescription);
    void deletePrescription(Long id);
}
