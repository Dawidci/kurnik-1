package com.kurnik.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kurnik.entities.UserResult;
import com.kurnik.repositories.UserResultRepository;

@Service
public class UserResultService {
	
    @Autowired
    public UserResultRepository userResultRepository;

    public void addUserResult(UserResult userResult){
        userResultRepository.save(userResult);
    }

    public Optional<UserResult> getUserResult(int id){
        return userResultRepository.findById(id);
    }
    
    public List<UserResult> getUserResults(){
        List<UserResult> userResults = new ArrayList<>();
        userResultRepository.findAll().forEach(userResults::add);
        return userResults;
    }
    
    public List<UserResult> getAllUserResultsByUser(int userId){
        List<UserResult> userResults = new ArrayList<>();

        userResultRepository.findAllByUserId(userId).forEach(userResults::add);

        return userResults;
    }

}
