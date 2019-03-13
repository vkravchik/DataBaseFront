import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../model/User";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  currentUser: User;

  constructor(private _user: UserService,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser = this._user.user;
    if (this.currentUser === undefined) {
      this._user.getSingle(this.router.snapshot.params['id']).subscribe((res: User) => {
        this.currentUser = res;
      })
    }
  }

}
