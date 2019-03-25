import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {User} from "../../../model/User";
import {UserService} from "../../../services/user.service";
import {FormControl, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {DialogService} from "../../../services/dialog.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

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


  constructor(private dialogRef: MatDialogRef<EditUserComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private _user: UserService,
              private _dialog: DialogService) { }

  ngOnInit() {
    this.getSingle();
  }

  getSingle() {
    this._user.getSingle(this.data.id).subscribe((res: User) => {
      this.currentUser = res;
      this.user.email = this.currentUser.email;
      this.user.password = this.currentUser.password;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.user.id = this.data.id;
    this._dialog.dialogUpdate(this.user);
  }
}
