package com.examplehealthcare.healthcareplatform.service.impl;

import java.util.List;
import org.springframework.stereotype.Service;
import com.examplehealthcare.healthcareplatform.model.LabOrders;
import com.examplehealthcare.healthcareplatform.repository.LabOrdersRepository;
import com.examplehealthcare.healthcareplatform.service.LabOrdersService;

import jakarta.transaction.Transactional;

@Service
public class LabOrdersServiceImpl implements LabOrdersService {

    private final LabOrdersRepository labOrdersRepository;

    public LabOrdersServiceImpl(LabOrdersRepository labOrdersRepository) {
        this.labOrdersRepository = labOrdersRepository;
    }

    @Override
    @Transactional
    public List<LabOrders> findAllLabOrders() {
        return labOrdersRepository.findAll();
    }

    @Override
    @Transactional
    public LabOrders findLabOrderById(Long id) {
        return labOrdersRepository.findById(id).orElseThrow(() -> new RuntimeException("Lab Order not found with ID: " + id));
    }

    @Override
    @Transactional
    public LabOrders saveLabOrder(LabOrders labOrder) {
        return labOrdersRepository.save(labOrder);
    }

    @Override
    @Transactional
    public void deleteLabOrder(Long id) {
        labOrdersRepository.deleteById(id);
    }
}
