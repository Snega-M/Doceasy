package com.doceasy.doctorservice.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
@Document(value="doctor")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data

public class Doctor {
	 @Id
	    private String id;
	    private String did;
	    private String name;
	    private String department;
	    private String description;
	    private BigDecimal fee;

}
