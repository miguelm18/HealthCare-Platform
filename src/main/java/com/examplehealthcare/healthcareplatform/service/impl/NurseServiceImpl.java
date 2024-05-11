package com.examplehealthcare.healthcareplatform.service.impl;

import java.util.List;
import org.springframework.stereotype.Service;
import com.examplehealthcare.healthcareplatform.model.Nurse;
import com.examplehealthcare.healthcareplatform.repository.NurseRepository;
import com.examplehealthcare.healthcareplatform.service.NurseService;
import jakarta.transaction.Transactional;

@Service
public class NurseServiceImpl implements NurseService {

    private final NurseRepository nurseRepository;

    public NurseServiceImpl(NurseRepository nurseRepository) {
        this.nurseRepository = nurseRepository;
    }

    @Override
    @Transactional
    public List<Nurse> findAllNurses() {
        return nurseRepository.findAll();
    }

    @Override
    @Transactional
    public Nurse findNurseById(Long id) {
        return nurseRepository.findById(id).orElseThrow(() -> new RuntimeException("Nurse not found with ID: " + id));
    }

    @Override
    @Transactional
    public Nurse saveNurse(Nurse nurse) {
        return nurseRepository.save(nurse);
    }

    @Override
    @Transactional
    public void deleteNurse(Long id) {
        nurseRepository.deleteById(id);
    }
}
