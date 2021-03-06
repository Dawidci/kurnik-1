package com.kurnik.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kurnik.entities.UserResult;
import org.springframework.stereotype.Repository;

@Repository
public interface UserResultRepository extends JpaRepository<UserResult,Integer> {
	
	public List<UserResult> findAllByUserId(int userId);

}
