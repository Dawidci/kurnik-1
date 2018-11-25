package com.kurnik.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kurnik.entities.User;

public interface UserRepository extends JpaRepository<User,Integer> {
}
