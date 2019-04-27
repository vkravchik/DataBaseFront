import { Component, OnInit } from '@angular/core';
import {AutoPersonal} from "../../model/AutoPersonal";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Name', 'SurName', 'CategoryPersonalName', 'actions'];
  personal: AutoPersonal[];
  constructor() { }

  ngOnInit() {
  }

}
