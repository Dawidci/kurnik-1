package com.kurnik.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "gry")
public class Game {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_Gry")
	private int id;
	
	@Column(name = "Nazwa")
	private String title;
	/*
	@OneToMany(mappedBy = "game", cascade = CascadeType.ALL)
	private List<BestResult> bestResults;

	@OneToMany(mappedBy = "game", cascade = CascadeType.ALL)
	private List<UserResult> userResults;
	
	public void add(BestResult tempBestResult) {
		if(bestResults == null) {
			bestResults = new ArrayList<>();
		}
		bestResults.add(tempBestResult);
		tempBestResult.setGame(this);
	}
	
	public void add(UserResult tempUserResult) {
		if(userResults == null) {
			userResults = new ArrayList<>();
		}
		userResults.add(tempUserResult);
		tempUserResult.setGame(this);
	}
	*/
	public Game() {

	}
		
	
	public Game(String title) {
		super();
		this.title = title;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@Override
	public String toString() {
		return "Game [id=" + id + ", title=" + title + "]";
	}
	/*
	public List<BestResult> getBestResults() {
		return bestResults;
	}

	public void setBestResults(List<BestResult> bestResults) {
		this.bestResults = bestResults;
	}

	public List<UserResult> getUserResults() {
		return userResults;
	}

	public void setUserResults(List<UserResult> userResults) {
		this.userResults = userResults;
	}
	*/
}
