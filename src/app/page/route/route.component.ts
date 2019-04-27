import { Component, OnInit } from '@angular/core';
import {AutoRoute} from "../../model/AutoRoute";

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Street', 'Category', 'Marka', 'PassangerCount', 'actions'];
  route: AutoRoute[];
  constructor() { }

  ngOnInit() {
  }

}
