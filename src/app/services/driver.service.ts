import { Injectable } from '@angular/core';
import {User} from "../model/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {Driver} from "../model/Driver";
import {AutoDrivers} from "../model/AutoDrivers";

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  drivers: Driver[];
  driver: Driver;
  editedRow: Driver;
  newRow: Driver;

  constructor(private http: HttpClient,
              private _error: ErrorService) { }

  getAll(): Observable<Driver[]> {
    return this.http.get(environment.apiUrl + environment.apiDriver + '/all').pipe(
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

  update(id: number, driver: any): Observable<AutoDrivers> {
    let url = environment.apiUrl + environment.apiDriver + '/' + id;

    let body = JSON.stringify(driver);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, {headers: headers}).pipe(
      map((res: AutoDrivers) => {
        this.editedRow = res;
        return this.editedRow;
      }),
      catchError(this._error.handleError)
    )
  }

  delete(id: number): Observable<any> {
    let url = environment.apiUrl + environment.apiDriver + '/' + id;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.delete(url, {headers: headers}).pipe(
      map(res => {
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

  add(driver: any): Observable<AutoDrivers> {
    let url = environment.apiUrl + environment.apiDriver + '/add';

    let body = JSON.stringify(driver);
    console.log(body);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, {headers: headers}).pipe(
      map((res: AutoDrivers) => {
        this.newRow = res;
        return res;
      }),
      catchError(this._error.handleError)
    )
  }
}
