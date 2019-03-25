import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Observable} from "rxjs";
import {User} from "../model/User";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {AutoCategory} from "../model/AutoCategory";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categorys: AutoCategory[];
  private category: AutoCategory;

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
}
