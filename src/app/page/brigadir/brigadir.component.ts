import { Component, OnInit } from '@angular/core';
import {AutoBrigadir} from "../../model/AutoBrigadir";
import {FakeBackService} from "../../services/fake-back.service";

@Component({
  selector: 'app-brigadir',
  templateUrl: './brigadir.component.html',
  styleUrls: ['./brigadir.component.css']
})
export class BrigadirComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Name', 'actions'];
  brigadir: AutoBrigadir[];
  constructor(private back: FakeBackService) { }

  ngOnInit() {
    this.brigadir = this.back.getBrigadir();
    console.log(this.brigadir);
  }

}
