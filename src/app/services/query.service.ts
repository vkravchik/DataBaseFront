import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  rows;
  dialogsForm;

  constructor(private http: HttpClient,
              private _error: ErrorService) {
  }

  query1(): Observable<any[]> {
    return this.http.get(environment.apiUrl + 'auto/getAll').pipe(
      map( res => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    )
  }

  query2_1(): Observable<any[]> {
    let url = environment.apiUrl + 'drivers/getAll';

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get(url, {headers: headers}).pipe(
      map( res => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    )
  }

  query2_2(auto): Observable<any[]> {
    let url = environment.apiUrl + 'drivers/getAllByAuto';

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set('auto', auto);

    return this.http.get(url, {headers: headers, params: params}).pipe(
      map( res => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    )
  }

  query3(): Observable<any[]> {
    let url = environment.apiUrl + 'drivers/getAll';

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get(url, {headers: headers}).pipe(
      map( res => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    )
  }

  query4(): Observable<any[]> {
    let url = environment.apiUrl + 'route/getAll';

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get(url, {headers: headers}).pipe(
      map( res => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    )
  }

  query6_1(category): Observable<any[]> {
    let url = environment.apiUrl + 'repair/getAllByCategory';

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set('category', category);

    return this.http.get(url, {headers: headers, params: params}).pipe(
      map( res => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    )
  }

  query6_2(marka): Observable<any[]> {
    let url = environment.apiUrl + 'repair/getAllByMarka';

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set('marka', marka);

    return this.http.get(url, {headers: headers, params: params}).pipe(
      map( res => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    )
  }

  query6_3(auto): Observable<any[]> {
    let url = environment.apiUrl + 'repair/getAllByAuto';

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set('auto', auto);

    return this.http.get(url, {headers: headers, params: params}).pipe(
      map( res => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    )
  }

  query7(): Observable<any[]> {
    let url = environment.apiUrl + 'group/getAll';

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get(url, {headers: headers}).pipe(
      map( res => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    )
  }

  query8_1(): Observable<any[]> {
    let url = environment.apiUrl + 'infrastruct/getAllGarage';

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get(url, {headers: headers}).pipe(
      map( res => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    )
  }

  query8_2(category): Observable<any[]> {
    let url = environment.apiUrl + 'infrastruct/getAllGarage';

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set('category', category);

    return this.http.get(url, {headers: headers, params: params}).pipe(
      map( res => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    )
  }

  query9(): Observable<any[]> {
    let url = environment.apiUrl + 'auto/getAll';

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get(url, {headers: headers}).pipe(
      map( res => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    )
  }

  query10(auto, date): Observable<any[]> {
    let url = environment.apiUrl + 'hardRoute/findByAutoAndDate';

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set('auto_id', auto).set('date', date);

    return this.http.get(url, {headers: headers, params: params}).pipe(
      map( res => {
        this.rows = res;
        return this.rows;
      }),
      catchError(this._error.handleError)
    )
  }

}
