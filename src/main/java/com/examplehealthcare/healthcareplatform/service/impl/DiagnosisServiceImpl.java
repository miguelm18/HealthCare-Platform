package com.examplehealthcare.healthcareplatform.service.impl;

import com.examplehealthcare.healthcareplatform.service.DiagnosisService;

import jakarta.transaction.Transactional;

import java.util.List;

import com.examplehealthcare.healthcareplatform.model.Diagnosis;
import com.examplehealthcare.healthcareplatform.repository.DiagnosisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DiagnosisServiceImpl implements DiagnosisService {

    private final DiagnosisRepository diagnosisRepository;

    @Autowired
    public DiagnosisServiceImpl(DiagnosisRepository diagnosisRepository) {
        this.diagnosisRepository = diagnosisRepository;
    }

    @Override
    @Transactional
    public List<Diagnosis> findAllDiagnoses() {

        return diagnosisRepository.findAll(); //replace with repository method
    }

    @Override
    @Transactional
    public Diagnosis findDiagnosisById(Long id) {
        return diagnosisRepository.findById(id).orElse(null);
    }

    @Override
    @Transactional
    public Diagnosis saveDiagnosis(Diagnosis diagnosis) {
        return diagnosisRepository.save(diagnosis);
    }

    @Override
    @Transactional
    public void deleteDiagnosis(Long id) {
        diagnosisRepository.deleteById(id);
    }
}