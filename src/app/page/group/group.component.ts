import { Component, OnInit } from '@angular/core';
import {AutoGroup} from "../../model/AutoGroup";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  displayedColumns: string[] = ['id', 'PersonalName', 'DriversName', 'BrigadaName', 'BrigadirName', 'actions'];
  group: AutoGroup[];
  constructor() { }

  ngOnInit() {
  }

}
