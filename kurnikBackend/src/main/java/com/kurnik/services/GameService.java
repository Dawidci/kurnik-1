package com.kurnik.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kurnik.entities.Game;
import com.kurnik.repositories.GameRepository;

@Service
public class GameService {
	
    @Autowired
    public GameRepository gameRepository;

    public void addGame(Game game){
        gameRepository.save(game);
    }

    public Game getGame(int id){
        return gameRepository.findById(id).get();
    }
    
    public List<Game> getGames(){
        List<Game> games = new ArrayList<>();
        gameRepository.findAll().forEach(games::add);
        return games;
    }

}
