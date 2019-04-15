import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {AutoCategoryPersonal} from "../model/AutoCategoryPersonal";

@Injectable({
  providedIn: 'root'
})
export class CategoryPersonalService {

  private rows: AutoCategoryPersonal[];
  private row: AutoCategoryPersonal;
  editedRow: AutoCategoryPersonal;
  newRow: AutoCategoryPersonal;

  constructor(private http: HttpClient,
              private _error: ErrorService) { }

  getAll(): Observable<AutoCategoryPersonal[]> {
    return this.http.get(environment.apiUrl + environment.apiCategoryPersonal + '/all').pipe(
      map((res: AutoCategoryPersonal[]) => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    );
  }

  getSingle(id: number): Observable<AutoCategoryPersonal> {
    return this.http.get(environment.apiUrl + environment.apiCategoryPersonal + '/' + id).pipe(
      map((res: AutoCategoryPersonal) => {
        this.row = res;
        return this.row;
      }),
      catchError(this._error.handleError)
    )
  }

  update(id: number, item: any): Observable<AutoCategoryPersonal> {
    let url = environment.apiUrl + environment.apiCategoryPersonal + '/' + id;

    let body = JSON.stringify(item);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, {headers: headers}).pipe(
      map((res: AutoCategoryPersonal) => {
        this.editedRow = res;
        return this.editedRow;
      }),
      catchError(this._error.handleError)
    )
  }

  delete(id: number): Observable<any> {
    let url = environment.apiUrl + environment.apiCategoryPersonal + '/' + id;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.delete(url, {headers: headers}).pipe(
      map(res => {
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

  add(item: any): Observable<AutoCategoryPersonal> {
    let url = environment.apiUrl + environment.apiCategoryPersonal + '/add';

    let body = JSON.stringify(item);
    console.log(body);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, {headers: headers}).pipe(
      map((res: AutoCategoryPersonal) => {
        this.newRow = res;
        return res;
      }),
      catchError(this._error.handleError)
    )
  }
}
