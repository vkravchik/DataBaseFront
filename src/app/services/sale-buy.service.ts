import {Injectable} from '@angular/core';
import {AutoSaleBuy} from "../model/AutoSaleBuy";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SaleBuyService {

  private rows: AutoSaleBuy[];
  private row: AutoSaleBuy;
  editedRow: AutoSaleBuy;
  newRow: AutoSaleBuy;

  constructor(private http: HttpClient,
              private _error: ErrorService) { }

  getAll(): Observable<AutoSaleBuy[]> {
    return this.http.get(environment.apiUrl + environment.apiSaleBuy + '/all').pipe(
      map((res: AutoSaleBuy[]) => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    );
  }

  getSingle(id: number): Observable<AutoSaleBuy> {
    return this.http.get(environment.apiUrl + environment.apiSaleBuy + '/' + id).pipe(
      map((res: AutoSaleBuy) => {
        this.row = res;
        return this.row;
      }),
      catchError(this._error.handleError)
    )
  }

  update(id: number, item: any): Observable<AutoSaleBuy> {
    let url = environment.apiUrl + environment.apiSaleBuy + '/' + id;

    let body = JSON.stringify(item);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, {headers: headers}).pipe(
      map((res: AutoSaleBuy) => {
        this.editedRow = res;
        return this.editedRow;
      }),
      catchError(this._error.handleError)
    )
  }

  delete(id: number): Observable<any> {
    let url = environment.apiUrl + environment.apiSaleBuy + '/' + id;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.delete(url, {headers: headers}).pipe(
      map(res => {
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

  add(item: any): Observable<AutoSaleBuy> {
    let url = environment.apiUrl + environment.apiSaleBuy + '/add';

    let body = JSON.stringify(item);
    console.log(body);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, {headers: headers}).pipe(
      map((res: AutoSaleBuy) => {
        this.newRow = res;
        return res;
      }),
      catchError(this._error.handleError)
    )
  }
}
