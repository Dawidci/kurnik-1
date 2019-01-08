package com.kurnik.entities;

import com.kurnik.auth.entity.User;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "wyniki_uzytkownika")
public class UserResult {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_Wyniku_uzytkownika")
	private int id;
	
	@ManyToOne(cascade = {CascadeType.PERSIST,
			CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH
	})
	@JoinColumn(name = "ID_Uzytkownika")
	private User user;
	
	@ManyToOne(cascade = {CascadeType.PERSIST,
			CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH
	})
	@JoinColumn(name = "ID_Gry")
	private Game game;
	
	@Column(name = "Data_uzyskania_wyniku")
	private String resultDate;
	
	@Column(name = "Wynik")
	private int result;
	
	public UserResult() {
		
	}

	public UserResult(String resultDate, int result) {
		super();
		this.resultDate = resultDate;
		this.result = result;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getResultDate() {
		return resultDate;
	}

	public void setResultDate(String resultDate) {
		this.resultDate = resultDate;
	}

	public int getResult() {
		return result;
	}

	public void setResult(int result) {
		this.result = result;
	}

	@Override
	public String toString() {
		return "UserResult [id=" + id + " resultDate=" + resultDate + ", result=" + result + "]";
	}

	public Game getGame() {
		return game;
	}

	public void setGame(Game game) {
		this.game = game;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}
