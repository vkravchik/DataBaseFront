import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {AutoBrigada} from "../model/AutoBrigada";

@Injectable({
  providedIn: 'root'
})
export class BrigadaService {

  private rows: AutoBrigada[];
  private row: AutoBrigada;
  editedRow: AutoBrigada;
  newRow: AutoBrigada;

  constructor(private http: HttpClient,
              private _error: ErrorService) { }

  getAll(): Observable<AutoBrigada[]> {
    return this.http.get(environment.apiUrl + environment.apiBrigada + '/all').pipe(
      map((res: AutoBrigada[]) => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    );
  }

  getSingle(id: number): Observable<AutoBrigada> {
    return this.http.get(environment.apiUrl + environment.apiBrigada + '/' + id).pipe(
      map((res: AutoBrigada) => {
        this.row = res;
        return this.row;
      }),
      catchError(this._error.handleError)
    )
  }

  update(id: number, item: any): Observable<AutoBrigada> {
    let url = environment.apiUrl + environment.apiCategory + '/' + id;

    let body = JSON.stringify(item);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, {headers: headers}).pipe(
      map((res: AutoBrigada) => {
        this.editedRow = res;
        return this.editedRow;
      }),
      catchError(this._error.handleError)
    )
  }

  delete(id: number): Observable<any> {
    let url = environment.apiUrl + environment.apiBrigada + '/' + id;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.delete(url, {headers: headers}).pipe(
      map(res => {
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

  add(item: any): Observable<AutoBrigada> {
    let url = environment.apiUrl + environment.apiBrigada + '/add';

    let body = JSON.stringify(item);
    console.log(body);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, {headers: headers}).pipe(
      map((res: AutoBrigada) => {
        this.newRow = res;
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

}
