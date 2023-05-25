package com.doceasy.availabilityservice;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.doceasy.availabilityservice.repository.AvailabilityRepository;
import com.doceasy.availabilityservice.model.Availability;


@SpringBootApplication
public class AvailabilityServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AvailabilityServiceApplication.class, args);}
	
//     @Bean
//     public CommandLineRunner loadData(AvailabilityRepository availabilityRepository) {
//	 return args-> {
//		 Availability availability = new Availability();
// Enable This to HardCode Availability Or use Database
// Saving Same Object will lead to No auto tranfer of Data from List of Appointments to Add Appointment page
		 //		 availability.setDCode("cardio");
//		 availability.setQuantity(100);
//		 availability.setPrice(700);
		 
//		 Availability availability1 = new Availability();
//		 availability1.setDCode("neuro");
//		 availability1.setQuantity(1);
//		  
//		 availabilityRepository.save(availability);
//		 availabilityRepository.save(availability1);
//		 
		 
//	 };	
//	}
     
	}


