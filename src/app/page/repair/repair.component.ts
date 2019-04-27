import { Component, OnInit } from '@angular/core';
import {AutoRepair} from "../../model/AutoRepair";

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {

  displayedColumns: string[] = ['id', 'ProblemName', 'Category', 'Marka', 'Date', 'PersonalName', 'Price', 'actions'];
  repair: AutoRepair[];
  constructor() { }

  ngOnInit() {
  }

}
