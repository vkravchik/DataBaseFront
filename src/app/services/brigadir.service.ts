import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {AutoBrigadir} from "../model/AutoBrigadir";

@Injectable({
  providedIn: 'root'
})
export class BrigadirService {

  private rows: AutoBrigadir[];
  private row: AutoBrigadir;
  editedRow: AutoBrigadir;
  newRow: AutoBrigadir;

  constructor(private http: HttpClient,
              private _error: ErrorService) { }

  getAll(): Observable<AutoBrigadir[]> {
    return this.http.get(environment.apiUrl + environment.apiBrigadir + '/all').pipe(
      map((res: AutoBrigadir[]) => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    );
  }

  getSingle(id: number): Observable<AutoBrigadir> {
    return this.http.get(environment.apiUrl + environment.apiBrigadir + '/' + id).pipe(
      map((res: AutoBrigadir) => {
        this.row = res;
        return this.row;
      }),
      catchError(this._error.handleError)
    )
  }

  update(id: number, item: any): Observable<AutoBrigadir> {
    let url = environment.apiUrl + environment.apiBrigadir + '/' + id;

    let body = JSON.stringify(item);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, {headers: headers}).pipe(
      map((res: AutoBrigadir) => {
        this.editedRow = res;
        return this.editedRow;
      }),
      catchError(this._error.handleError)
    )
  }

  delete(id: number): Observable<any> {
    let url = environment.apiUrl + environment.apiBrigadir + '/' + id;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.delete(url, {headers: headers}).pipe(
      map(res => {
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

  add(item: any): Observable<AutoBrigadir> {
    let url = environment.apiUrl + environment.apiBrigadir + '/add';

    let body = JSON.stringify(item);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, {headers: headers}).pipe(
      map((res: AutoBrigadir) => {
        this.newRow = res;
        return res;
      }),
      catchError(this._error.handleError)
    )
  }
  
}
