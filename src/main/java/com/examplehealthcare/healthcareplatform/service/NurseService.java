package com.examplehealthcare.healthcareplatform.service;

import java.util.List;
import com.examplehealthcare.healthcareplatform.model.Nurse;

public interface NurseService {
    List<Nurse> findAllNurses();
    Nurse findNurseById(Long id);
    Nurse saveNurse(Nurse nurse);
    void deleteNurse(Long id);
}
