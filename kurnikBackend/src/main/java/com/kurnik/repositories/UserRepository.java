package com.kurnik.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.kurnik.entities.User;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface UserRepository extends JpaRepository<User,Integer> {

	Iterable<User> findAllByPassword(String password);
}
