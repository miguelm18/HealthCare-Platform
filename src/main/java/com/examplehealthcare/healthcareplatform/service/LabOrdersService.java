package com.examplehealthcare.healthcareplatform.service;

import java.util.List;
import com.examplehealthcare.healthcareplatform.model.LabOrders;

public interface LabOrdersService {
    List<LabOrders> findAllLabOrders();
    LabOrders findLabOrderById(Long id);
    LabOrders saveLabOrder(LabOrders labOrder);
    void deleteLabOrder(Long id);
}
