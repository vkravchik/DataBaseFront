import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {AutoPersonal} from "../model/AutoPersonal";

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  private rows: AutoPersonal[];
  private row: AutoPersonal;
  editedRow: AutoPersonal;
  newRow: AutoPersonal;

  constructor(private http: HttpClient,
              private _error: ErrorService) { }

  getAll(): Observable<AutoPersonal[]> {
    return this.http.get(environment.apiUrl + environment.apiPersonal + '/all').pipe(
      map((res: AutoPersonal[]) => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    );
  }

  getSingle(id: number): Observable<AutoPersonal> {
    return this.http.get(environment.apiUrl + environment.apiPersonal + '/' + id).pipe(
      map((res: AutoPersonal) => {
        this.row = res;
        return this.row;
      }),
      catchError(this._error.handleError)
    )
  }

  update(id: number, item: any): Observable<AutoPersonal> {
    let url = environment.apiUrl + environment.apiPersonal + '/' + id;

    let body = JSON.stringify(item);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, {headers: headers}).pipe(
      map((res: AutoPersonal) => {
        this.editedRow = res;
        return this.editedRow;
      }),
      catchError(this._error.handleError)
    )
  }

  delete(id: number): Observable<any> {
    let url = environment.apiUrl + environment.apiPersonal + '/' + id;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.delete(url, {headers: headers}).pipe(
      map(res => {
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

  add(item: any): Observable<AutoPersonal> {
    let url = environment.apiUrl + environment.apiPersonal + '/add';

    let body = JSON.stringify(item);
    console.log(body);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, {headers: headers}).pipe(
      map((res: AutoPersonal) => {
        this.newRow = res;
        return res;
      }),
      catchError(this._error.handleError)
    )
  }
}
