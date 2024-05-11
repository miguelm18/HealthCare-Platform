package com.examplehealthcare.healthcareplatform.service;

import java.util.List;
import com.examplehealthcare.healthcareplatform.model.Diagnosis;

public interface DiagnosisService {
    List<Diagnosis> findAllDiagnoses();
    Diagnosis findDiagnosisById(Long id);
    Diagnosis saveDiagnosis(Diagnosis diagnosis);
    void deleteDiagnosis(Long id);
}
