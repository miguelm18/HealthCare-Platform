package com.examplehealthcare.healthcareplatform.service.impl;

import java.util.List;

import com.examplehealthcare.healthcareplatform.model.Nurse;
import com.examplehealthcare.healthcareplatform.service.NurseService;

import jakarta.transaction.Transactional;

import com.examplehealthcare.healthcareplatform.repository.NurseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NurseServiceImpl implements NurseService {

    private final NurseRepository nurseRepository;

    @Autowired
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
        return nurseRepository.findById(id).orElse(null);
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