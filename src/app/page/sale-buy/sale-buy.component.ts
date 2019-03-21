import { Component, OnInit } from '@angular/core';
import {AutoRoute} from "../../model/AutoRoute";
import {FakeBackService} from "../../services/fake-back.service";
import {AutoSaleBuy} from "../../model/AutoSaleBuy";

@Component({
  selector: 'app-sale-buy',
  templateUrl: './sale-buy.component.html',
  styleUrls: ['./sale-buy.component.css']
})
export class SaleBuyComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Category', 'Marka', 'Date', 'saleBuy', 'Price', 'actions'];
  saleBuy: AutoSaleBuy[];
  constructor(private back: FakeBackService) { }

  ngOnInit() {
    this.saleBuy = this.back.getSaleBuy();
    console.log(this.saleBuy);
  }

}
