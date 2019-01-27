package com.kurnik.controllers;

import com.kurnik.entities.BestResult;
import com.kurnik.entities.Game;
import com.kurnik.entities.UserResult;
import com.kurnik.services.BestResultService;
import com.kurnik.services.GameService;
import com.kurnik.services.UserResultService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CrudController {

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
    	System.out.println("CO TO? " + game);
    	System.out.println("CO TO? " + game.getTitle());
    	gameService.addGame(game);
    }
    
    @GetMapping("/bestResults")
    public List<BestResult> getBestResults() {
    	return bestResultService.getBestResults();
    }
    
    @GetMapping("/userResults")
    public List<UserResult> getUserResults() {
    	return userResultService.getUserResults();
    }

}
