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
@Table(name = "uzytkownicy")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_Uzytkownika")
	private int id;
	
	@Column(name = "Username")
	private String username;

	@Column(name = "Haslo")
	private String password;
	
	@Column(name = "Data_Rejestracji")
	private String singUpDate;
	/*
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<BestResult> bestResults;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<UserResult> userResults;
	
	public void add(BestResult tempBestResult) {
		if(bestResults == null) {
			bestResults = new ArrayList<>();
		}
		bestResults.add(tempBestResult);
		tempBestResult.setUser(this);
	}
	
	public void add(UserResult tempUserResult) {
		if(userResults == null) {
			userResults = new ArrayList<>();
		}
		userResults.add(tempUserResult);
		tempUserResult.setUser(this);
	}
	*/
	public User() {
		
	}

	public User(String username, String password, String singUpDate) {
		super();
		this.username = username;
		this.password = password;
		this.singUpDate = singUpDate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getSingUpDate() {
		return singUpDate;
	}

	public void setSingUpDate(String singUpDate) {
		this.singUpDate = singUpDate;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", singUpDate=" + singUpDate
				+ "]";
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
	
