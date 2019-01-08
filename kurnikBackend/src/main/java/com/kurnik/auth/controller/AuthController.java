package com.kurnik.auth.controller;

import com.kurnik.auth.entity.LoginForm;
import com.kurnik.auth.entity.User;
import com.kurnik.auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@CrossOrigin
public class AuthController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;


    @PostMapping(value = "/register")
    public ResponseEntity<?> register(
            @RequestBody User user
    ){
        if (userRepository.existsByUsername(user.getUsername())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        if(user.getPassword()==null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        User newUser = new User();
        newUser.setName(user.getName());
        newUser.setPassword(encoder.encode(user.getPassword()));
        newUser.setUsername(user.getUsername());
        newUser.setRole(user.getRole());
        newUser.setSingUpDate(LocalDateTime.now());

        userRepository.save(newUser);

        return ResponseEntity.ok(newUser);
    }

    @PostMapping(value = "/login")
    public ResponseEntity<?> login(
            @RequestBody LoginForm loginForm
    ){
        if (!userRepository.existsByUsername(loginForm.getUsername())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        User loginUser = userRepository.findByUsername(loginForm.getUsername());


        if(encoder.matches(loginForm.getPassword(), loginUser.getPassword())){
            return ResponseEntity.ok(loginUser);
        }else{
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }


    }


}