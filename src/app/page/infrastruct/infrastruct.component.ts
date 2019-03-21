import { Component, OnInit } from '@angular/core';
import {AutoHardRoute} from "../../model/AutoHardRoute";
import {FakeBackService} from "../../services/fake-back.service";
import {AutoInfrastruct} from "../../model/AutoInfrastruct";

@Component({
  selector: 'app-infrastruct',
  templateUrl: './infrastruct.component.html',
  styleUrls: ['./infrastruct.component.css']
})
export class InfrastructComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Name', 'Street', 'Category', 'actions'];
  infrastruct: AutoInfrastruct[];
  constructor(private back: FakeBackService) { }

  ngOnInit() {
    this.infrastruct = this.back.getInfrastruct();
    console.log(this.infrastruct);
  }

}
