package com.examplehealthcare.healthcareplatform;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.mockito.Mockito.*;
import static org.hamcrest.Matchers.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

import org.springframework.http.MediaType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.examplehealthcare.healthcareplatform.controller.DoctorController;
import com.examplehealthcare.healthcareplatform.model.Doctor;
import com.examplehealthcare.healthcareplatform.service.DoctorService;

import java.util.Arrays;
import java.util.List;

@WebMvcTest(DoctorController.class)
class DoctorControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private DoctorService doctorService;

    @BeforeEach
    void setUp(WebApplicationContext webApplicationContext) {
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
    }

    @Test
    void getAllDoctors_ReturnsAllDoctors() throws Exception {
        Doctor doctor1 = new Doctor("John Doe", "Male", "Cardiology", "1234567890", "john.doe@example.com", true);
        Doctor doctor2 = new Doctor("Jane Smith", "Female", "Pediatrics", "0987654321", "jane.smith@example.com", true);
        List<Doctor> allDoctors = Arrays.asList(doctor1, doctor2);

        when(doctorService.findAllDoctors()).thenReturn(allDoctors);

        mockMvc.perform(get("/api/doctors")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].name", is("John Doe")))
                .andExpect(jsonPath("$[1].name", is("Jane Smith")));
    }

    @Test
    void getDoctorById_ReturnsDoctor() throws Exception {
        Doctor doctor = new Doctor("John Doe", "Male", "Cardiology", "1234567890", "john.doe@example.com", true);

        when(doctorService.findDoctorById(1L)).thenReturn(doctor);

        mockMvc.perform(get("/api/doctors/{id}", 1)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is("John Doe")));
    }

    @Test
    void createDoctor_CreatesAndReturnsDoctor() throws Exception {
        Doctor savedDoctor = new Doctor("Jane Smith", "Female", "Pediatrics", "0987654321", "jane.smith@example.com", true);
        savedDoctor.setId(2L);

        when(doctorService.saveDoctor(any(Doctor.class))).thenReturn(savedDoctor);

        mockMvc.perform(post("/api/doctors")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"name\":\"Jane Smith\",\"gender\":\"Female\",\"specialty\":\"Pediatrics\",\"phone\":\"0987654321\",\"email\":\"jane.smith@example.com\",\"activeStatus\":true}"))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id", is(2)));
    }

    @Test
void updateDoctor_UpdatesAndReturnsDoctor() throws Exception {
    Doctor existingDoctor = new Doctor("John Doe", "Male", "Cardiology", "1234567890", "john.doe@example.com", true);
    existingDoctor.setId(1L);
    when(doctorService.findDoctorById(1L)).thenReturn(existingDoctor);
    when(doctorService.saveDoctor(any(Doctor.class))).thenReturn(existingDoctor);

    mockMvc.perform(put("/api/doctors/{id}", 1)
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"email\":\"john.new@example.com\"}"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.email", is("john.new@example.com")));
}


@Test
void deleteDoctor_DeletesDoctor() throws Exception {
doNothing().when(doctorService).deleteDoctor(1L);

mockMvc.perform(delete("/api/doctors/{id}", 1)
        .contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isNoContent());
}
}
