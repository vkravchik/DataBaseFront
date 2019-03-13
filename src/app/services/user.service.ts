import { Injectable } from '@angular/core';
import {User} from "../model/User";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {ObserveOnMessage} from "rxjs/internal/operators/observeOn";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  user: User;

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
}
