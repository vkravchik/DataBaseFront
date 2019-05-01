import {Injectable} from '@angular/core';
import {AutoRepair} from "../model/AutoRepair";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {AutoPersonal} from "../model/AutoPersonal";

@Injectable({
  providedIn: 'root'
})
export class RepairService {

  private rows: AutoRepair[];
  private row: AutoRepair;
  editedRow: AutoRepair;
  newRow: AutoRepair;

  constructor(private http: HttpClient,
              private _error: ErrorService) { }

  getAll(): Observable<AutoRepair[]> {
    return this.http.get(environment.apiUrl + environment.apiRepair + '/all').pipe(
      map((res: AutoRepair[]) => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    );
  }

  getSingle(id: number): Observable<AutoRepair> {
    return this.http.get(environment.apiUrl + environment.apiRepair + '/' + id).pipe(
      map((res: AutoRepair) => {
        this.row = res;
        return this.row;
      }),
      catchError(this._error.handleError)
    )
  }

  update(id: number, item: any): Observable<AutoRepair> {
    let url = environment.apiUrl + environment.apiRepair + '/' + id;

    let body = JSON.stringify(item);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, {headers: headers}).pipe(
      map((res: AutoRepair) => {
        this.editedRow = res;
        return this.editedRow;
      }),
      catchError(this._error.handleError)
    )
  }

  delete(id: number): Observable<any> {
    let url = environment.apiUrl + environment.apiRepair + '/' + id;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.delete(url, {headers: headers}).pipe(
      map(res => {
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

  add(item: any): Observable<AutoRepair> {
    let url = environment.apiUrl + environment.apiRepair + '/add';

    let body = JSON.stringify(item);
    console.log(body);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, {headers: headers}).pipe(
      map((res: AutoRepair) => {
        this.newRow = res;
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

}
