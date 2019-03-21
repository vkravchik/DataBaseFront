import { Component, OnInit } from '@angular/core';
import {AutoProblem} from "../../model/AutoProblem";
import {FakeBackService} from "../../services/fake-back.service";
import {AutoRepair} from "../../model/AutoRepair";

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {

  displayedColumns: string[] = ['id', 'ProblemName', 'Category', 'Marka', 'Date', 'PersonalName', 'Price', 'actions'];
  repair: AutoRepair[];
  constructor(private back: FakeBackService) { }

  ngOnInit() {
    this.repair = this.back.getRepair();
    console.log(this.repair);
  }

}
