import { Injectable } from '@angular/core';
import {User} from "../model/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  user: User;
  editedUser: User;
  newUser: User;
  // dialogData: User;

  constructor(private http: HttpClient,
              private _error: ErrorService) { }

  getAll(): Observable<User[]> {
    return this.http.get(environment.apiUrl + environment.apiUser + '/all').pipe(
      map((res: User[]) => {
        this.users = res;
        return this.users;
    }),
      catchError(this._error.handleError)
    );
  }

  getSingle(id: number): Observable<User> {
    return this.http.get(environment.apiUrl + environment.apiUser + '/' + id).pipe(
      map((res: User) => {
        this.user = res;
        return this.user;
      }),
      catchError(this._error.handleError)
    )
  }

  update(id: number, user: any): Observable<User> {
    let url = environment.apiUrl + environment.apiUser + '/' + id;

    let body = JSON.stringify(user);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, {headers: headers}).pipe(
      map((res: User) => {
        this.editedUser = res;
        return this.editedUser;
      }),
      catchError(this._error.handleError)
    )
  }

  delete(id: number): Observable<any> {
    let url = environment.apiUrl + environment.apiUser + '/' + id;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.delete(url, {headers: headers}).pipe(
      map(res => {
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

  add(user: any): Observable<User> {
    let url = environment.apiUrl + environment.apiUser + '/add';

    let body = JSON.stringify(user);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, {headers: headers}).pipe(
      map((res: User) => {
        this.newUser = res;
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

  getStorageInfo() {
    return localStorage.getItem('login');
  }

  setStorageInfo() {
    localStorage.setItem('login', '');
  }
}
