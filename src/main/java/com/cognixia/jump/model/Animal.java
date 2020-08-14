package com.cognixia.jump.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Animal implements Serializable {

	/**
	 * 
	 */

	private static final long serialVersionUID = 1L;
	// Auto increment
	private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
	private Long age;
	private String name;
	private String type;
	private String food;
	private String imageUrl;

	@Column(columnDefinition = "varchar(50) default 'Outdoors'")
	private String habitat;

	public Animal() {
		this((long) -1, (long) -1, "N/A", "N/A", "N/A", "images/logo.png");
	}

	@Override
	public String toString() {
		return "Animal [id=" + id + ", age=" + age + ", name=" + name + ", type=" + type + ", food=" + food
				+ ", imageUrl=" + imageUrl + ", habitat=" + habitat + "]";
	}

	public Animal(Long id, Long age, String name, String type, String food, String imgageUrl) {
		super();
		this.id = id;
		this.age = age;
		this.name = name;
		this.type = type;
		this.food = food;
	}

	public String getHabitat() {
		return habitat;
	}

	public void setHabitat(String habitat) {
		this.habitat = habitat;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getAge() {
		return age;
	}

	public void setAge(Long age) {
		this.age = age;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getFood() {
		return food;
	}

	public void setFood(String food) {
		this.food = food;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

}
