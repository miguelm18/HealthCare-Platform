package com.examplehealthcare.healthcareplatform.service;

import java.util.List;

import com.examplehealthcare.healthcareplatform.model.HealthHistory;

public interface HealthHistoryService {
    List<HealthHistory> findAllHealthHistories();
    HealthHistory findHealthHistoryById(Long id);
    HealthHistory saveHealthHistory(HealthHistory healthHistory);
    void deleteHealthHistory(Long id);
}

