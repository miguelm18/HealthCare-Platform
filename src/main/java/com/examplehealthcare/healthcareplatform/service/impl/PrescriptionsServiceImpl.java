package com.examplehealthcare.healthcareplatform.service.impl;

import java.util.List;
import org.springframework.stereotype.Service;
import com.examplehealthcare.healthcareplatform.model.Prescriptions;
import com.examplehealthcare.healthcareplatform.repository.PrescriptionsRepository;
import com.examplehealthcare.healthcareplatform.service.PrescriptionsService;
import jakarta.transaction.Transactional;

@Service
public class PrescriptionsServiceImpl implements PrescriptionsService {

    private final PrescriptionsRepository prescriptionsRepository;

    public PrescriptionsServiceImpl(PrescriptionsRepository prescriptionsRepository) {
        this.prescriptionsRepository = prescriptionsRepository;
    }

    @Override
    @Transactional
    public List<Prescriptions> findAllPrescriptions() {
        return prescriptionsRepository.findAll();
    }

    @Override
    @Transactional
    public Prescriptions findPrescriptionById(Long id) {
        return prescriptionsRepository.findById(id).orElseThrow(() -> new RuntimeException("Prescription not found with ID: " + id));
    }

    @Override
    @Transactional
    public Prescriptions savePrescription(Prescriptions prescription) {
        return prescriptionsRepository.save(prescription);
    }

    @Override
    @Transactional
    public void deletePrescription(Long id) {
        prescriptionsRepository.deleteById(id);
    }
}
