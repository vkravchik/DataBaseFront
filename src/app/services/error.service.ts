import { Injectable } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private isHandset$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) { }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error);
  }
}
