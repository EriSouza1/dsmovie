package com.devsuperior.DSMovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;


import com.devsuperior.DSMovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);
	
}
