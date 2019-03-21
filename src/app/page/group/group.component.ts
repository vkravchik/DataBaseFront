import { Component, OnInit } from '@angular/core';
import {AutoCategoryPersonal} from "../../model/AutoCategoryPersonal";
import {FakeBackService} from "../../services/fake-back.service";
import {AutoGroup} from "../../model/AutoGroup";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  displayedColumns: string[] = ['id', 'PersonalName', 'DriversName', 'BrigadaName', 'BrigadirName', 'actions'];
  group: AutoGroup[];
  constructor(private back: FakeBackService) { }

  ngOnInit() {
    this.group = this.back.getGroup();
    console.log(this.group);
  }

}
