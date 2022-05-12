package com.devsuperior.DSMovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.DSMovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}

