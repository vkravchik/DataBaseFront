import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../model/User";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {AutoMarka} from "../model/AutoMarka";

@Injectable({
  providedIn: 'root'
})
export class MarkaService {
  private markas: AutoMarka[];
  private marka: AutoMarka;

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
}
