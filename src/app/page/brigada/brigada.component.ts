import { Component, OnInit } from '@angular/core';
import {FakeBackService} from "../../services/fake-back.service";
import {AutoBrigada} from "../../model/AutoBrigada";

@Component({
  selector: 'app-brigada',
  templateUrl: './brigada.component.html',
  styleUrls: ['./brigada.component.css']
})
export class BrigadaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Name', 'actions'];
  brigada: AutoBrigada[];
  constructor(private back: FakeBackService) { }

  ngOnInit() {
    this.brigada = this.back.getBrigada();
    console.log(this.brigada);
  }

}
