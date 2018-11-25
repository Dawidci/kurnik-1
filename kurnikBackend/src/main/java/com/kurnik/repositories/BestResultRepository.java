package com.kurnik.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kurnik.entities.BestResult;

public interface BestResultRepository extends JpaRepository<BestResult,Integer> {

	public List<BestResult> findAllByGameId(int gameId);
}
