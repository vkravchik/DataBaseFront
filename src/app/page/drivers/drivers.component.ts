import { Component, OnInit } from '@angular/core';
import {AutoCategoryPersonal} from "../../model/AutoCategoryPersonal";
import {FakeBackService} from "../../services/fake-back.service";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Name', 'SurName', 'Category', 'Marka', 'actions'];
  drivers: AutoCategoryPersonal[];
  constructor(private back: FakeBackService) { }

  ngOnInit() {
    this.drivers = this.back.getDrivers();
    console.log(this.drivers);
  }

}
