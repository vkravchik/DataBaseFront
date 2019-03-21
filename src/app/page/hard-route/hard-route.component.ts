import { Component, OnInit } from '@angular/core';
import {AutoGroup} from "../../model/AutoGroup";
import {FakeBackService} from "../../services/fake-back.service";
import {AutoHardRoute} from "../../model/AutoHardRoute";

@Component({
  selector: 'app-hard-route',
  templateUrl: './hard-route.component.html',
  styleUrls: ['./hard-route.component.css']
})
export class HardRouteComponent implements OnInit {

  displayedColumns: string[] = ['id', 'PointStart', 'PointFinish', 'DateStart', 'DateFinish', 'Category', 'Marka', 'actions'];
  hardRoute: AutoHardRoute[];
  constructor(private back: FakeBackService) { }

  ngOnInit() {
    this.hardRoute = this.back.getHardRoute();
    console.log(this.hardRoute);
  }

}
