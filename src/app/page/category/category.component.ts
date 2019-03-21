import { Component, OnInit } from '@angular/core';
import {AutoCategory} from "../../model/AutoCategory";
import {FakeBackService} from "../../services/fake-back.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'Name', 'actions'];
  category: AutoCategory[];
  constructor(private back: FakeBackService) { }

  ngOnInit() {
    this.category = this.back.getCategory();
    console.log(this.category);
  }

}
