import { Component, OnInit } from '@angular/core';
import {AutoSaleBuy} from "../../model/AutoSaleBuy";
import {FakeBackService} from "../../services/fake-back.service";
import {AutoStreet} from "../../model/AutoStreet";

@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.css']
})
export class StreetComponent implements OnInit {

  displayedColumns: string[] = ['id', 'StreetStart', 'StreetFinish', 'Intervall', 'actions'];
  street: AutoStreet[];
  constructor(private back: FakeBackService) { }

  ngOnInit() {
    this.street = this.back.getStreet();
    console.log(this.street);
  }

}
