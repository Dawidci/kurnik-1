package com.kurnik.controllers;

import com.kurnik.entities.BestResult;
import com.kurnik.entities.Game;
import com.kurnik.entities.User;
import com.kurnik.entities.UserResult;
import com.kurnik.services.BestResultService;
import com.kurnik.services.GameService;
import com.kurnik.services.UserResultService;
import com.kurnik.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class CrudController {

	@Autowired
	private UserService userService;
	@Autowired
	private GameService gameService;
	@Autowired
	private BestResultService bestResultService;
	@Autowired
	private UserResultService userResultService;
    
    @GetMapping("/")
    public String getHome(){
        return "index";
    }
    
    @GetMapping("/games")
    private List<Game> getGames(Model model) {
    	return gameService.getGames();
    }
    
	@GetMapping("/games/{id}")
	public Game getTopic(@PathVariable int id) {
		return gameService.getGame(id);
	}
	
    @PostMapping("/games")
    public void addGame(@RequestBody Game game) {
    	gameService.addGame(game);
    }
    
    @GetMapping("/users")
    public List<User> getUsers(Model model){
    	return userService.getUsers();
    }
    
    @GetMapping("/bestResults")
    public List<BestResult> getBestResults(Model model) {
    	return bestResultService.getBestResults();
    }
    
    @GetMapping("/userResults")
    public List<UserResult> getUserResults(Model model) {
    	return userResultService.getUserResults();
    }
}
