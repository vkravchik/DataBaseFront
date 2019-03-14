import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../model/User";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  currentUser: User;
  errorUser: Boolean = false;

  user = {
    id: '',
    email: '',
    password: ''
  };

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private _user: UserService,
              private router: ActivatedRoute) { }

  ngOnInit() {
    // this.currentUser = this._user.user;
    // if (this.currentUser === undefined) {
      this._user.getSingle(this.router.snapshot.params['id']).subscribe(
        (res: User) => {
          this.currentUser = res;
          this.user.email = this.currentUser.email;
          this.user.password = this.currentUser.password;
      },
        (error) => {this.errorUser = true})
    // }
  }

  updateUser(id) {
    this.user.id = id;
    this._user.updateUser(id, this.user).subscribe((res: User) => {
      this.currentUser = res;

    });
  }
}
