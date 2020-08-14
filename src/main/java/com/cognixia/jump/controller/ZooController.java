package com.cognixia.jump.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cognixia.jump.model.Animal;
import com.cognixia.jump.service.ZooService;

@RequestMapping("/api")
@RestController
public class ZooController {
	@Autowired
	ZooService service;

	@GetMapping("/animal/{id}")
	public Animal getAnimal(@PathVariable Long id) {
		return service.getAnimalById(id);
	}

	@GetMapping("/animals")
	public List<Animal> getAllAnimals() {
		return service.getAllAnimals();
	}

	@GetMapping("/animals/{habitat}")
	public List<Animal> getAnimalsByHabitat(@PathVariable String habitat) {
		return service.getAnimalsByHabitat(habitat);
	}

	@PostMapping("/add")
	public @ResponseBody String addAnimal(@RequestBody Animal animal) {
		System.out.println(animal.getName());
		Animal newAnimal = service.addAnimal(animal);

		return newAnimal.toString();
	}

	@PutMapping("/update")
	public @ResponseBody String updateAnimal(@RequestBody Animal animal) {

		Optional<Animal> found = service.findById(animal.getId());

		if (found.isPresent()) {
			service.updateAnimal(animal);
			return "Saved: " + animal.toString();
		} else {
			return "Could not update student, the id = " + animal.getId() + " doesn't exist";
		}

	}

	@DeleteMapping("/delete/{id}")
	public @ResponseBody String deleteAnimal(@PathVariable Long id) {
		Animal animal = service.deleteAnimal(id);
		System.out.println("Deleted : " + animal);
		return animal.toString();
	}

}
