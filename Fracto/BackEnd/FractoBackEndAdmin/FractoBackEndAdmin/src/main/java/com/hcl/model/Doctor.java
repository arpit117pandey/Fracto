package com.hcl.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Doctor {
	@Id
	@Column(name="name")
	private String name;
	@Column(name="city")
	private String city;
	@Column(name="specialization")
	private String specialization;
	@Column(name="rating")
	private double rating;


}
