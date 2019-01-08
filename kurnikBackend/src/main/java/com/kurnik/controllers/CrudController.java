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

//nie potrzeba @CrossOrigin pod kazda metoda - wystarczy nad nazwa klasy
//w encjach nie potrzeba dawac @Column - hibernate automatycznie tworzy nazwe - chyba ze uzyjesz jakiegos slowa kluczowego typu "table" "order" itp. to wtedy warto dac nazwe
//no i nazywaj po angielsku encje w bazie jak cala aplikacje masz po angielsku
//porozbijaj sobie controllery na funkcjonalnosci np. jak ja zrobilem - do rejestracji i logowania oddzielny kontroller, do gier inny itp.
//nad repository tez nie trzeba @CrossOrigin
// w app properties dodalem "spring.jpa.hibernate.ddl-auto=create-drop" -ogolnie warto tego uzywac jak zmieniasz kolumny w bazie/relacje w bazie, bo inaczej ci sie baza rozjezdza z tym coc masz w javie a co masz w bazie, ale uwaga to dropuje i stawia od nowa baze
//do dat uzywaj LocalDate/LocalDateTime a nie stringow :b

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
