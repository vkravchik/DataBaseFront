import { Component, OnInit } from '@angular/core';
import {AutoProblem} from "../../model/AutoProblem";

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Name', 'actions'];
  problem: AutoProblem[];
  constructor() { }

  ngOnInit() {
  }

}
