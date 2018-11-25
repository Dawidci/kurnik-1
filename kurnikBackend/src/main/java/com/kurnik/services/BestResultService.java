package com.kurnik.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kurnik.entities.BestResult;
import com.kurnik.repositories.BestResultRepository;

@Service
public class BestResultService {
	
    @Autowired
    public BestResultRepository bestResultRepository;

    public void addBestResult(BestResult bestResult){
        bestResultRepository.save(bestResult);
    }

    public Optional<BestResult> getBestResult(int id){
        return bestResultRepository.findById(id);
    }
    
    public List<BestResult> getBestResults(){
        List<BestResult> bestResults = new ArrayList<>();
        bestResultRepository.findAll().forEach(bestResults::add);
        return bestResults;
    }
    
    public List<BestResult> getAllBestResultsByGame(int gameId){
        List<BestResult> bestResults = new ArrayList<>();
        bestResultRepository.findAllByGameId(gameId).forEach(bestResults::add);
        return bestResults;
    }


}