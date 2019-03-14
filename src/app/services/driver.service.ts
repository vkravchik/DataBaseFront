import { Injectable } from '@angular/core';
import {User} from "../model/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {Driver} from "../model/Driver";

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  drivers: Driver[];
  driver: Driver;
  editedDriver: Driver;

  constructor(private http: HttpClient,
              private _error: ErrorService) { }

  getAll(): Observable<Driver[]> {
    return this.http.get(environment.apiUrl + environment.apiUser + '/all').pipe(
      map((res: Driver[]) => {
        this.drivers = res;
        return this.drivers;
      }),
      catchError(this._error.handleError)
    );
  }

  getSingle(id: number): Observable<Driver> {
    return this.http.get(environment.apiUrl + environment.apiDriver + '/' + id).pipe(
      map((res: Driver) => {
        this.driver = res;
        return this.driver;
      }),
      catchError(this._error.handleError)
    )
  }

  updateUser(id: number, driver: any): Observable<Driver> {
    let url = environment.apiUrl + environment.apiDriver + '/' + id;

    let body = JSON.stringify(driver);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, {headers: headers}).pipe(
      map((res: Driver) => {
        this.editedDriver = res;
        return this.editedDriver;
      }),
      catchError(this._error.handleError)
    )
  }
}
