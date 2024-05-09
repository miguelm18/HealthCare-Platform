package com.examplehealthcare.healthcareplatform.service.impl;

import java.util.List;

import com.examplehealthcare.healthcareplatform.model.Prescriptions;
import com.examplehealthcare.healthcareplatform.repository.PrescriptionsRepository;
import com.examplehealthcare.healthcareplatform.service.PrescriptionsService;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

public class PrescriptionsServiceImpl implements PrescriptionsService {

    private final PrescriptionsRepository prescriptionsRepository;

    @Autowired
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
        return prescriptionsRepository.findById(id).orElse(null);
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