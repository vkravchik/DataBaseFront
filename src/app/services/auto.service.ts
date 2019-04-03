import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Driver} from "../model/Driver";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Auto} from "../model/Auto";
import {AutoMarka} from "../model/AutoMarka";
import {AutoCategory} from "../model/AutoCategory";

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  autos: Auto[];
  auto: Auto;
  editedRow: Auto;
  newRow: Auto;

  constructor(private http: HttpClient,
              private _error: ErrorService) { }

  getAll(): Observable<Auto[]> {
    return this.http.get(environment.apiUrl + environment.apiAuto + '/all').pipe(
      map((res: Auto[]) => {
        this.autos = res;
        return this.autos;
      }),
      catchError(this._error.handleError)
    );
  }

  getSingle(id: number): Observable<Auto> {
    return this.http.get(environment.apiUrl + environment.apiAuto + '/' + id).pipe(
      map((res: Auto) => {
        this.auto = res;
        return this.auto;
      }),
      catchError(this._error.handleError)
    )
  }

  update(id: number, auto: any): Observable<Auto> {
    let url = environment.apiUrl + environment.apiAuto + '/' + id;

    let body = JSON.stringify(auto);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, {headers: headers}).pipe(
      map((res: Auto) => {
        this.editedRow = res;
        return this.editedRow;
      }),
      catchError(this._error.handleError)
    )
  }

  delete(id: number): Observable<any> {
    let url = environment.apiUrl + environment.apiAuto + '/' + id;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.delete(url, {headers: headers}).pipe(
      map(res => {
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

  add(auto: any): Observable<Auto> {
    let url = environment.apiUrl + environment.apiAuto + '/add';

    let body = JSON.stringify(auto);
    console.log(body);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, {headers: headers}).pipe(
      map((res: Auto) => {
        this.newRow = res;
        return res;
      }),
      catchError(this._error.handleError)
    )
  }
}
