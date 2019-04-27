import { Component, OnInit } from '@angular/core';
import {AutoStreet} from "../../model/AutoStreet";

@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.css']
})
export class StreetComponent implements OnInit {

  displayedColumns: string[] = ['id', 'StreetStart', 'StreetFinish', 'Intervall', 'actions'];
  street: AutoStreet[];
  constructor() { }

  ngOnInit() {
  }

}
