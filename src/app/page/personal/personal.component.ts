import { Component, OnInit } from '@angular/core';
import {AutoProp} from "../../model/AutoProp";
import {FakeBackService} from "../../services/fake-back.service";
import {AutoPersonal} from "../../model/AutoPersonal";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Name', 'SurName', 'CategoryPersonalName', 'actions'];
  personal: AutoPersonal[];
  constructor(private back: FakeBackService) { }

  ngOnInit() {
    this.personal = this.back.getPersonal();
    console.log(this.personal);
  }

}
