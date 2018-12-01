package com.kurnik.services;

import com.kurnik.entities.User;
import com.kurnik.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    public UserRepository userRepository;

    public void addUser(User user){
        userRepository.save(user);
    }

    public Optional<User> getUser(int id){
        return userRepository.findById(id);
    }
    
    public List<User> getUsers(){
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }
    
    public List<User> getOldUsers(String password) {
    	List<User> users = new ArrayList<>();
    	userRepository.findAllByPassword(password).forEach(users::add);
    	return users;
    }
}
