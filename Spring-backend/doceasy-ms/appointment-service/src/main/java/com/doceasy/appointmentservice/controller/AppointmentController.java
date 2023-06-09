package com.doceasy.appointmentservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.doceasy.appointmentservice.dto.AppointmentRequest;
import com.doceasy.appointmentservice.model.Appointment;
import com.doceasy.appointmentservice.service.AppointmentService;
import com.doceasy.appointmentservice.repository.AppointmentRepository;

import lombok.RequiredArgsConstructor;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/appointment")
@RequiredArgsConstructor
public class AppointmentController {
	
	@Autowired
	private AppointmentRepository appointmentRepository;
	
	private final AppointmentService appointmentService;
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public String placeAppointment(@RequestBody AppointmentRequest appointmentRequest) {
		
		appointmentService.placeAppointment(appointmentRequest);
		return "Appointment Sucessfull";
	}
	


}
