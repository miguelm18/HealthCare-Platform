package com.examplehealthcare.healthcareplatform.service.impl;

import java.util.List;
import org.springframework.stereotype.Service;
import com.examplehealthcare.healthcareplatform.model.Diagnosis;
import com.examplehealthcare.healthcareplatform.repository.DiagnosisRepository;
import com.examplehealthcare.healthcareplatform.service.DiagnosisService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class DiagnosisServiceImpl implements DiagnosisService {

    private final DiagnosisRepository diagnosisRepository;

    public DiagnosisServiceImpl(DiagnosisRepository diagnosisRepository) {
        this.diagnosisRepository = diagnosisRepository;
    }

    @Override
    @Transactional
    public List<Diagnosis> findAllDiagnoses() {
        return diagnosisRepository.findAll();
    }

    @Override
    @Transactional
    public Diagnosis findDiagnosisById(Long id) {
        return diagnosisRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Diagnosis not found with ID: " + id));
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
