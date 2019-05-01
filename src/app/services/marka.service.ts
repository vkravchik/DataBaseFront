import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {AutoMarka} from "../model/AutoMarka";
import {AutoCategory} from "../model/AutoCategory";

@Injectable({
  providedIn: 'root'
})
export class MarkaService {
  private markas: AutoMarka[];
  private marka: AutoMarka;
  private editedRow: AutoMarka;
  private newRow: AutoCategory;

  constructor(private http: HttpClient,
              private _error: ErrorService) { }

  getAll(): Observable<AutoMarka[]> {
    return this.http.get(environment.apiUrl + environment.apiMarka + '/all').pipe(
      map((res: AutoMarka[]) => {
        this.markas = res;
        return this.markas;
      }),
      catchError(this._error.handleError)
    );
  }

  getSingle(id: number): Observable<AutoMarka> {
    return this.http.get(environment.apiUrl + environment.apiMarka + '/' + id).pipe(
      map((res: AutoMarka) => {
        this.marka = res;
        return this.marka;
      }),
      catchError(this._error.handleError)
    )
  }

  update(id: number, marka: any): Observable<AutoMarka> {
    let url = environment.apiUrl + environment.apiMarka + '/' + id;

    let body = JSON.stringify(marka);

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, {headers: headers}).pipe(
      map((res: AutoMarka) => {
        this.editedRow = res;
        return this.editedRow;
      }),
      catchError(this._error.handleError)
    )
  }

  delete(id: number): Observable<any> {
    let url = environment.apiUrl + environment.apiMarka + '/' + id;

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.delete(url, {headers: headers}).pipe(
      map(res => {
        return res;
      }),
      catchError(this._error.handleError)
    )
  }

  add(marka: any): Observable<AutoMarka> {
    let url = environment.apiUrl + environment.apiMarka + '/add';

    let body = JSON.stringify(marka);
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
