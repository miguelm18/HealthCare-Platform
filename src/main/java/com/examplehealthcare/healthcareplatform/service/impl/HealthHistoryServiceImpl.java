package com.examplehealthcare.healthcareplatform.service.impl;

import java.util.List;
import org.springframework.stereotype.Service;
import com.examplehealthcare.healthcareplatform.model.HealthHistory;
import com.examplehealthcare.healthcareplatform.repository.HealthHistoryRepository;
import com.examplehealthcare.healthcareplatform.service.HealthHistoryService;

import jakarta.transaction.Transactional;

@Service
public class HealthHistoryServiceImpl implements HealthHistoryService {

    private final HealthHistoryRepository healthHistoryRepository;

    
    public HealthHistoryServiceImpl(HealthHistoryRepository healthHistoryRepository) {
        this.healthHistoryRepository = healthHistoryRepository;
    }

    @Override
    @Transactional
    public List<HealthHistory> findAllHealthHistories() {
        return healthHistoryRepository.findAll();
    }

    @Override
    @Transactional
    public HealthHistory findHealthHistoryById(Long id) {
        return healthHistoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Health History not found with ID: " + id));
    }

    @Override
    @Transactional
    public HealthHistory saveHealthHistory(HealthHistory healthHistory) {
        return healthHistoryRepository.save(healthHistory);
    }

    @Override
    @Transactional
    public void deleteHealthHistory(Long id) {
        healthHistoryRepository.deleteById(id);
    }
}
