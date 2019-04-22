import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {AutoHardRoute} from "../model/AutoHardRoute";

@Injectable({
  providedIn: 'root'
})
export class HardRouteService {

  private rows: AutoHardRoute[];
  private row: AutoHardRoute;
  editedRow: AutoHardRoute;
  newRow: AutoHardRoute;

  constructor(private http: HttpClient,
              private _error: ErrorService) { }

  getAll(): Observable<AutoHardRoute[]> {
    return this.http.get(environment.apiUrl + environment.apiHarRoute + '/all').pipe(
      map((res: AutoHardRoute[]) => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    );
  }

  getSingle(id: number): Observable<AutoHardRoute> {
    return this.http.get(environment.apiUrl + environment.apiHarRoute + '/' + id).pipe(
      map((res: AutoHardRoute) => {
        this.row = res;
        return this.row;
      }),
      catchError(this._error.handleError)
    )
  }

  update(id: number, item: any): Observable<AutoHardRoute> {
    let url = environment.apiUrl + environment.apiHarRoute + '/' + id;

    let body = JSON.stringify(item);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, {headers: headers}).pipe(
      map((res: AutoHardRoute) => {
        this.editedRow = res;
        return this.editedRow;
      }),
      catchError(this._error.handleError)
    )
  }

  delete(id: number): Observable<any> {
    let url = environment.apiUrl + environment.apiHarRoute + '/' + id;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.delete(url, {headers: headers}).pipe(
      map(res => {
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

  add(item: any): Observable<AutoHardRoute> {
    let url = environment.apiUrl + environment.apiHarRoute + '/add';

    let body = JSON.stringify(item);
    console.log(body);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, {headers: headers}).pipe(
      map((res: AutoHardRoute) => {
        this.newRow = res;
        return res;
      }),
      catchError(this._error.handleError)
    )
  }
}
