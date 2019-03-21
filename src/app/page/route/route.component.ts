import { Component, OnInit } from '@angular/core';
import {AutoRepair} from "../../model/AutoRepair";
import {FakeBackService} from "../../services/fake-back.service";
import {AutoRoute} from "../../model/AutoRoute";

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Street', 'Category', 'Marka', 'PassangerCount', 'actions'];
  route: AutoRoute[];
  constructor(private back: FakeBackService) { }

  ngOnInit() {
    this.route = this.back.getRoute();
    console.log(this.route);
  }

}
