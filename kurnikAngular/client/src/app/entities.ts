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
  public constructor() { }
  id: number;
  username: string;
  password: string;
  singUpDate: Date;
}

export class UserResult {
  id: number;
  result: number;
  user: User;
  game: Game;
}