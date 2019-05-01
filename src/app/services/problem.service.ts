import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {AutoProblem} from "../model/AutoProblem";

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  private rows: AutoProblem[];
  private row: AutoProblem;
  editedRow: AutoProblem;
  newRow: AutoProblem;

  constructor(private http: HttpClient,
              private _error: ErrorService) { }

  getAll(): Observable<AutoProblem[]> {
    return this.http.get(environment.apiUrl + environment.apiProblem + '/all').pipe(
      map((res: AutoProblem[]) => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    );
  }

  getSingle(id: number): Observable<AutoProblem> {
    return this.http.get(environment.apiUrl + environment.apiProblem + '/' + id).pipe(
      map((res: AutoProblem) => {
        this.row = res;
        return this.row;
      }),
      catchError(this._error.handleError)
    )
  }

  update(id: number, item: any): Observable<AutoProblem> {
    let url = environment.apiUrl + environment.apiProblem + '/' + id;

    let body = JSON.stringify(item);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, {headers: headers}).pipe(
      map((res: AutoProblem) => {
        this.editedRow = res;
        return this.editedRow;
      }),
      catchError(this._error.handleError)
    )
  }

  delete(id: number): Observable<any> {
    let url = environment.apiUrl + environment.apiProblem + '/' + id;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.delete(url, {headers: headers}).pipe(
      map(res => {
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

  add(item: any): Observable<AutoProblem> {
    let url = environment.apiUrl + environment.apiProblem + '/add';

    let body = JSON.stringify(item);
    console.log(body);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, {headers: headers}).pipe(
      map((res: AutoProblem) => {
        this.newRow = res;
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

}
