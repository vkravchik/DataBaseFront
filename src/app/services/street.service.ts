import {Injectable} from '@angular/core';
import {AutoStreet} from "../model/AutoStreet";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {AutoGroup} from "../model/AutoGroup";

@Injectable({
  providedIn: 'root'
})
export class StreetService {

  private rows: AutoStreet[];
  private row: AutoStreet;
  editedRow: AutoStreet;
  newRow: AutoStreet;

  constructor(private http: HttpClient,
              private _error: ErrorService) { }

  getAll(): Observable<AutoStreet[]> {
    return this.http.get(environment.apiUrl + environment.apiStreet + '/all').pipe(
      map((res: AutoStreet[]) => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    );
  }

  getSingle(id: number): Observable<AutoStreet> {
    return this.http.get(environment.apiUrl + environment.apiStreet + '/' + id).pipe(
      map((res: AutoStreet) => {
        this.row = res;
        return this.row;
      }),
      catchError(this._error.handleError)
    )
  }

  update(id: number, item: any): Observable<AutoStreet> {
    let url = environment.apiUrl + environment.apiStreet + '/' + id;

    let body = JSON.stringify(item);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, {headers: headers}).pipe(
      map((res: AutoStreet) => {
        this.editedRow = res;
        return this.editedRow;
      }),
      catchError(this._error.handleError)
    )
  }

  delete(id: number): Observable<any> {
    let url = environment.apiUrl + environment.apiStreet + '/' + id;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.delete(url, {headers: headers}).pipe(
      map(res => {
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

  add(item: any): Observable<AutoStreet> {
    let url = environment.apiUrl + environment.apiStreet + '/add';

    let body = JSON.stringify(item);
    console.log(body);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, {headers: headers}).pipe(
      map((res: AutoStreet) => {
        this.newRow = res;
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

}
