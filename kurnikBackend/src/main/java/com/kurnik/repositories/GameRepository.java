package com.kurnik.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kurnik.entities.Game;

public interface GameRepository extends JpaRepository<Game,Integer> {

}
