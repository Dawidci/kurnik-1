package com.kurnik.auth.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {
	
	@Id
	@GeneratedValue
	private Long id;

	private String name;

	private String username;

	private String password;

	private String role;

	private LocalDateTime singUpDate;


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

	public User(String name, String username, String password, String role, LocalDateTime singUpDate) {
		this.name = name;
		this.username = username;
		this.password = password;
		this.role = role;
		this.singUpDate = singUpDate;
	}

	public Long getId() {
		return id;
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public LocalDateTime getSingUpDate() {
		return singUpDate;
	}

	public void setSingUpDate(LocalDateTime singUpDate) {
		this.singUpDate = singUpDate;
	}

	/*
	public User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
		LocalDate localDate = LocalDate.now();
		this.singUpDate = DateTimeFormatter.ofPattern("yyyy/MM/dd").format(localDate);
	}
	*/

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
	
