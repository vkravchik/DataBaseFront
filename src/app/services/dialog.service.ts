import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  dialogData: any;

  constructor() { }

  dialogUpdate(object: any): void {
    this.dialogData = object;
  }

  dialogAdd(object: any): void {
    this.dialogData = object;
  }
}
