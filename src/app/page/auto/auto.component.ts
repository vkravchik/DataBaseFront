import { Component, OnInit } from '@angular/core';
import {FakeBackService} from "../../services/fake-back.service";
import {Auto} from "../../model/Auto";

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Category', 'Marka', 'actions'];
  autos: Auto[];
  constructor(private back: FakeBackService) { }

  ngOnInit() {
    this.autos = this.back.getAuto();
    console.log(this.autos);
  }

}
