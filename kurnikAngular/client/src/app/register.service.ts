import { Injectable } from '@angular/core';
import {LoginForm, User} from "./entities";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  register(user: User) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    console.log(user);
    return this.http.post<User>('http://localhost:8080/register', user, {headers});
  }

  login(log: LoginForm) {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    console.log(log);
    return this.http.post<LoginForm>('http://localhost:8080/login', log, {headers});
  }
}
