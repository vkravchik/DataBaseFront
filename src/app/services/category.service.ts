import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {AutoCategory} from "../model/AutoCategory";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categorys: AutoCategory[];
  private category: AutoCategory;
  editedRow: AutoCategory;
  newRow: AutoCategory;

  constructor(private http: HttpClient,
              private _error: ErrorService) { }

  getAll(): Observable<AutoCategory[]> {
    return this.http.get(environment.apiUrl + environment.apiCategory + '/all').pipe(
      map((res: AutoCategory[]) => {
        this.categorys = res;
        return this.categorys;
      }),
      catchError(this._error.handleError)
    );
  }

  getSingle(id: number): Observable<AutoCategory> {
    return this.http.get(environment.apiUrl + environment.apiCategory + '/' + id).pipe(
      map((res: AutoCategory) => {
        this.category = res;
        return this.category;
      }),
      catchError(this._error.handleError)
    )
  }

  update(id: number, category: any): Observable<AutoCategory> {
    let url = environment.apiUrl + environment.apiCategory + '/' + id;

    let body = JSON.stringify(category);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, {headers: headers}).pipe(
      map((res: AutoCategory) => {
        this.editedRow = res;
        return this.editedRow;
      }),
      catchError(this._error.handleError)
    )
  }

  delete(id: number): Observable<any> {
    let url = environment.apiUrl + environment.apiCategory + '/' + id;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.delete(url, {headers: headers}).pipe(
      map(res => {
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

  add(category: any): Observable<AutoCategory> {
    let url = environment.apiUrl + environment.apiCategory + '/add';

    let body = JSON.stringify(category);
    console.log(body);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, {headers: headers}).pipe(
      map((res: AutoCategory) => {
        this.newRow = res;
        return res;
      }),
      catchError(this._error.handleError)
    )
  }
}
