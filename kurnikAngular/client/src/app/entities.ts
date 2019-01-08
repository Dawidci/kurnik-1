export class BestResult {
  id: number;
  result: number;
  user: User;
  game: Game;
}

export class Game {
  public constructor() { }
  id: number;
  title: string;
}

export class User {
  id: number;
  name: string;
  username: string;
  password: string;
  role:string;

  constructor(name: string, username: string, password: string, role: string) {
    this.username = username;
    this.name = name;
    this.password = password;
    this.role = role;
  }
}

export class UserResult {
  id: number;
  result: number;
  user: User;
  game: Game;
}

export class LoginForm{
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
