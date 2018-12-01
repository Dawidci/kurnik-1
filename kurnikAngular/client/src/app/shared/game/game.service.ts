import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GameService {
  public API = '//localhost:8080';
  public GAME_API = this.API + '/games';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.GAME_API);
  }

  get(id: string) {
    return this.http.get(this.GAME_API + '/' + id);
  }

  save(game: any): Observable<any> {
    let result: Observable<Object>;
    if(game['href']) {
      result = this.http.put(game.href, game);
    } else {
      result = this.http.post(this.GAME_API, game);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}