import { Component, OnInit } from '@angular/core';
import {AutoProp} from "../../model/AutoProp";

@Component({
  selector: 'app-prop',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.css']
})
export class PropComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Name', 'Category', 'actions'];
  prop: AutoProp[];
  constructor() { }

  ngOnInit() {
  }

}
