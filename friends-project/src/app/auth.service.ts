import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import { LoginResponse } from './user';
import { User } from "./interfaces/user";
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Observable<User>;
  authorized:Boolean = false;
  BASE_URL = 'http://localhost:8000/'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }

  // login(username:string, password:string) {
  //   if(username !== 'admin' || password !== 'admin123') return false;
  //   // else return false;
  //   this.user = {
  //     id: 1,
  //     username: username,
  //     password: password
  //   }
  //   return true;
  // }

  login(username, password): Observable<LoginResponse> {
    this.authorized = true;
    return this.http.post<LoginResponse>(`${this.BASE_URL}api/login/`, {
      username,
      password
    })
  }

  register(firstName, lastName, username,password):Observable<User> {
    this.user = this.http.post<User>(`${this.BASE_URL}api/users/`, {
      username,
      password,
      first_name:firstName,
      last_name:lastName
    })
    return this.user;
  }

  isAuthorized() {
    return this.authorized;
  }

  getUser(username:String):Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}api/users?username=${username}`);
  }


  updateUser (user: User): Observable<User> {
    const url =  `${this.BASE_URL}users/${user.id}`
    return this.http.put(url, user, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  
  // HANDLE ERROR++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
