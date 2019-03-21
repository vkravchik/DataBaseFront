import { Component, OnInit } from '@angular/core';
import {AutoMarka} from "../../model/AutoMarka";
import {FakeBackService} from "../../services/fake-back.service";
import {AutoProblem} from "../../model/AutoProblem";

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Name', 'actions'];
  problem: AutoProblem[];
  constructor(private back: FakeBackService) { }

  ngOnInit() {
    this.problem = this.back.getProblem();
    console.log(this.problem);
  }

}
