import { Injectable } from '@angular/core';
import {AutoInfrastruct} from "../model/AutoInfrastruct";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InfrastructService {

  private rows: AutoInfrastruct[];
  private row: AutoInfrastruct;
  editedRow: AutoInfrastruct;
  newRow: AutoInfrastruct;

  constructor(private http: HttpClient,
              private _error: ErrorService) { }

  getAll(): Observable<AutoInfrastruct[]> {
    return this.http.get(environment.apiUrl + environment.apiInfrastruct + '/all').pipe(
      map((res: AutoInfrastruct[]) => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    );
  }

  getSingle(id: number): Observable<AutoInfrastruct> {
    return this.http.get(environment.apiUrl + environment.apiInfrastruct + '/' + id).pipe(
      map((res: AutoInfrastruct) => {
        this.row = res;
        return this.row;
      }),
      catchError(this._error.handleError)
    )
  }

  update(id: number, item: any): Observable<AutoInfrastruct> {
    let url = environment.apiUrl + environment.apiInfrastruct + '/' + id;

    let body = JSON.stringify(item);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, {headers: headers}).pipe(
      map((res: AutoInfrastruct) => {
        this.editedRow = res;
        return this.editedRow;
      }),
      catchError(this._error.handleError)
    )
  }

  delete(id: number): Observable<any> {
    let url = environment.apiUrl + environment.apiInfrastruct + '/' + id;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.delete(url, {headers: headers}).pipe(
      map(res => {
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

  add(item: any): Observable<AutoInfrastruct> {
    let url = environment.apiUrl + environment.apiInfrastruct + '/add';

    let body = JSON.stringify(item);
    console.log(body);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, {headers: headers}).pipe(
      map((res: AutoInfrastruct) => {
        this.newRow = res;
        return res;
      }),
      catchError(this._error.handleError)
    )
  }
}
