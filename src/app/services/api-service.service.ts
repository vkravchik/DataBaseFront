import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {AutoStreet} from "../model/AutoStreet";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {Apis} from "../model/Apis";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private url: string;

  constructor(private http: HttpClient,
              private router: Router,
              private _error: ErrorService) {
    this.url = this.router.url;
  }

  getAll(): Observable<any> {
    return this.http.get<Apis>(environment.apiUrl + this.url + '/all').pipe(
      map(res => {
        return res;
      }),
      catchError(this._error.handleError)
    );
  }
}
