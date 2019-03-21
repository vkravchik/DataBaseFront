import { Component, OnInit } from '@angular/core';
import {AutoCategory} from "../../model/AutoCategory";
import {FakeBackService} from "../../services/fake-back.service";
import {AutoCategoryPersonal} from "../../model/AutoCategoryPersonal";

@Component({
  selector: 'app-category-personal',
  templateUrl: './category-personal.component.html',
  styleUrls: ['./category-personal.component.css']
})
export class CategoryPersonalComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Name', 'actions'];
  categoryPersonal: AutoCategoryPersonal[];
  constructor(private back: FakeBackService) { }

  ngOnInit() {
    this.categoryPersonal = this.back.getCategoryPersonal();
    console.log(this.categoryPersonal);
  }

}
