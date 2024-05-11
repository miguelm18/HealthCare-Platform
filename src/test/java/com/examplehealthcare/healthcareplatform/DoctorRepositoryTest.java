package com.examplehealthcare.healthcareplatform;

import com.examplehealthcare.healthcareplatform.model.Doctor;
import com.examplehealthcare.healthcareplatform.repository.DoctorRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class DoctorRepositoryTest {

    @Autowired
    private DoctorRepository doctorRepository;

    @Test
    void testSaveDoctor() {
        Doctor doctor = new Doctor("John Doe", "Male", "Cardiology", "123-456-7890", "john@example.com", true);
        Doctor savedDoctor = doctorRepository.save(doctor);
        assertThat(savedDoctor).isNotNull();
        assertThat(savedDoctor.getId()).isNotNull();
 

    }

}
