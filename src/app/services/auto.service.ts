import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Driver} from "../model/Driver";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Auto} from "../model/Auto";

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  autos: Auto[];
  auto: Auto;
  editedRow: Auto;
  newRow: Auto;

  constructor(private http: HttpClient,
              private _error: ErrorService) { }

  getAll(): Observable<Auto[]> {
    return this.http.get(environment.apiUrl + environment.apiAuto + '/all').pipe(
      map((res: Auto[]) => {
        this.autos = res;
        return this.autos;
      }),
      catchError(this._error.handleError)
    );
  }

  getSingle(id: number): Observable<Auto> {
    return this.http.get(environment.apiUrl + environment.apiAuto + '/' + id).pipe(
      map((res: Auto) => {
        this.auto = res;
        return this.auto;
      }),
      catchError(this._error.handleError)
    )
  }
}
