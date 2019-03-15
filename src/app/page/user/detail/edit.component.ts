import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../model/User";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

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
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
      this._user.getSingle(this.route.snapshot.params['id']).subscribe(
        (res: User) => {
          this.currentUser = res;
          this.user.email = this.currentUser.email;
          this.user.password = this.currentUser.password;
      },
        (error) => {this.errorUser = true})
  }

  updateUser(id) {
    this.user.id = id;
    this._user.update(id, this.user).subscribe(
      (res: User) => {
        this.currentUser = res;
        this.toastr.success('Update success', 'Success');
    },
      (error) => {this.toastr.error('Updating Error', 'Error')});
  }

  deleteUser(id: number) {
    this._user.delete(id).subscribe(
      (res) => {
        this.router.navigate(['/user']);
        this.toastr.success('Delete success', 'Success');
      },
      (error) => {

      }
    )
  }
}
