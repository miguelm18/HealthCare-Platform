package com.examplehealthcare.healthcareplatform;

import static org.mockito.Mockito.*;
import static org.assertj.core.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;

import com.examplehealthcare.healthcareplatform.model.Doctor;
import com.examplehealthcare.healthcareplatform.repository.DoctorRepository;
import com.examplehealthcare.healthcareplatform.service.impl.DoctorServiceImpl;

@ExtendWith(MockitoExtension.class)
class DoctorServiceTest {

    @Mock
    private DoctorRepository doctorRepository;

    @InjectMocks
    private DoctorServiceImpl doctorService;

    @Test
    void testSaveDoctor_IncludesAuditFields() {
        // Arrange
        LocalDateTime testTime = LocalDateTime.now();
        Doctor doctor = new Doctor("John Doe", "Male", "Cardiology", "1234567890", "john@example.com", true);
        doctor.setImageUrl("http://example.com/image.jpg");
        when(doctorRepository.save(any(Doctor.class))).thenAnswer(invocation -> {
            Doctor saved = invocation.getArgument(0);
            saved.setId(1L);
            saved.setCreatedAt(testTime);
            saved.setUpdatedAt(testTime);
            return saved;
        });

        // Act
        Doctor savedDoctor = doctorService.saveDoctor(doctor);

        // Assert
        assertThat(savedDoctor.getId()).isNotNull();
        assertThat(savedDoctor.getImageUrl()).isEqualTo("http://example.com/image.jpg");
        assertThat(savedDoctor.getCreatedAt()).isEqualTo(testTime);
        assertThat(savedDoctor.getUpdatedAt()).isEqualTo(testTime);
    }
}
