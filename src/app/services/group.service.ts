import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {AutoGroup} from "../model/AutoGroup";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private rows: AutoGroup[];
  private row: AutoGroup;
  editedRow: AutoGroup;
  newRow: AutoGroup;

  constructor(private http: HttpClient,
              private _error: ErrorService) { }

  getAll(): Observable<AutoGroup[]> {
    return this.http.get(environment.apiUrl + environment.apiGroup + '/all').pipe(
      map((res: AutoGroup[]) => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    );
  }

  getSingle(id: number): Observable<AutoGroup> {
    return this.http.get(environment.apiUrl + environment.apiGroup + '/' + id).pipe(
      map((res: AutoGroup) => {
        this.row = res;
        return this.row;
      }),
      catchError(this._error.handleError)
    )
  }

  update(id: number, item: any): Observable<AutoGroup> {
    let url = environment.apiUrl + environment.apiGroup + '/' + id;

    let body = JSON.stringify(item);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, {headers: headers}).pipe(
      map((res: AutoGroup) => {
        this.editedRow = res;
        return this.editedRow;
      }),
      catchError(this._error.handleError)
    )
  }

  delete(id: number): Observable<any> {
    let url = environment.apiUrl + environment.apiGroup + '/' + id;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.delete(url, {headers: headers}).pipe(
      map(res => {
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

  add(item: any): Observable<AutoGroup> {
    let url = environment.apiUrl + environment.apiGroup + '/add';

    let body = JSON.stringify(item);
    console.log(body);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, {headers: headers}).pipe(
      map((res: AutoGroup) => {
        this.newRow = res;
        return res;
      }),
      catchError(this._error.handleError)
    )
  }
}
