package com.cognixia.jump.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognixia.jump.model.Animal;
import com.cognixia.jump.repository.ZooRepository;

@Service
public class ZooService {

	@Autowired
	private ZooRepository repository;

	// get mappings
	public Animal getAnimalById(Long id) {
		Optional<Animal> found = repository.findById(id);

		if (found.isPresent()) {
			return found.get();
		}
		return new Animal();
	}

	public List<Animal> getAllAnimals() {
		return repository.findAll();
	}

	public List<Animal> getAnimalsByHabitat(String habitat) {
		return repository.findByHabitat(habitat);
	}

	// post
	public Animal addAnimal(Animal animal) {
		System.out.println(animal.getName());

		// zooDB.add(newAnimal);
		repository.save(animal);

		return animal;
	}

	// put
	public Animal updateAnimal(Animal animal) {
		return repository.save(animal);
	}

	// delete
	public Animal deleteAnimal(Long id) {

		Animal animal = getAnimalById(id);

		repository.delete(animal);

		return animal;
	}

	public Optional<Animal> findById(Long id) {
		return repository.findById(id);
	}
}
