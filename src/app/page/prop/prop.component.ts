import { Component, OnInit } from '@angular/core';
import {FakeBackService} from "../../services/fake-back.service";
import {AutoProp} from "../../model/AutoProp";

@Component({
  selector: 'app-prop',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.css']
})
export class PropComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Name', 'Category', 'actions'];
  prop: AutoProp[];
  constructor(private back: FakeBackService) { }

  ngOnInit() {
    this.prop = this.back.getProp();
    console.log(this.prop);
  }

}
