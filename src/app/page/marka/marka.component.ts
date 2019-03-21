import { Component, OnInit } from '@angular/core';
import {AutoCategory} from "../../model/AutoCategory";
import {FakeBackService} from "../../services/fake-back.service";
import {AutoMarka} from "../../model/AutoMarka";

@Component({
  selector: 'app-marka',
  templateUrl: './marka.component.html',
  styleUrls: ['./marka.component.css']
})
export class MarkaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Name', 'actions'];
  marka: AutoMarka[];
  constructor(private back: FakeBackService) { }

  ngOnInit() {
    this.marka = this.back.getMarka();
    console.log(this.marka);
  }

}
