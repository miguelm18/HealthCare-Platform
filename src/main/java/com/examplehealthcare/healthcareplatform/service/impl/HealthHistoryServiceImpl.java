package com.examplehealthcare.healthcareplatform.service.impl;
import com.examplehealthcare.healthcareplatform.service.HealthHistoryService;

import jakarta.transaction.Transactional;

import java.util.List;

import com.examplehealthcare.healthcareplatform.model.HealthHistory;
import com.examplehealthcare.healthcareplatform.repository.HealthHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HealthHistoryServiceImpl implements HealthHistoryService {

    private final HealthHistoryRepository healthHistoryRepository;

    @Autowired
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
        return healthHistoryRepository.findById(id).orElse(null);
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