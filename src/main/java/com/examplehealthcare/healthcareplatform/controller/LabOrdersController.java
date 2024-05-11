package com.examplehealthcare.healthcareplatform.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.examplehealthcare.healthcareplatform.model.LabOrders;
import com.examplehealthcare.healthcareplatform.service.LabOrdersService;

@RestController
@RequestMapping("/api/labOrders")
public class LabOrdersController {
    private final LabOrdersService labOrdersService;

    public LabOrdersController(LabOrdersService labOrdersService) {
        this.labOrdersService = labOrdersService;
    }

    @GetMapping
    public ResponseEntity<List<LabOrders>> getAllLabOrders() {
        List<LabOrders> labOrders = labOrdersService.findAllLabOrders();
        return ResponseEntity.ok(labOrders);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LabOrders> getLabOrderById(@PathVariable Long id) {
        LabOrders labOrder = labOrdersService.findLabOrderById(id);
        return ResponseEntity.ok(labOrder);
    }

    @PostMapping
    public ResponseEntity<LabOrders> createLabOrder(@RequestBody LabOrders newLabOrder) {
        LabOrders createdLabOrder = labOrdersService.saveLabOrder(newLabOrder);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdLabOrder);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LabOrders> updateLabOrder(@PathVariable Long id, @RequestBody LabOrders updatedLabOrder) {
        LabOrders currentLabOrder = labOrdersService.findLabOrderById(id);
        if (currentLabOrder != null) {
            currentLabOrder.setTestType(updatedLabOrder.getTestType());
            currentLabOrder.setOrderDate(updatedLabOrder.getOrderDate());
            currentLabOrder.setStatus(updatedLabOrder.getStatus());
            currentLabOrder.setResults(updatedLabOrder.getResults());
            LabOrders updated = labOrdersService.saveLabOrder(currentLabOrder);
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLabOrder(@PathVariable Long id) {
        labOrdersService.deleteLabOrder(id);
        return ResponseEntity.noContent().build();
    }
}
