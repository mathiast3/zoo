package com.cognixia.jump.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cognixia.jump.model.Animal;

@Repository
public interface ZooRepository extends JpaRepository<Animal, Long> {

	@Query("select a from Animal a where a.habitat = :habitat")
	public List<Animal> findByHabitat(@Param("habitat") String habitat);
}
