import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteUserComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private _user: UserService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
  }

  confirmDelete() {
    this._user.delete(this.data.id).subscribe(
      (res) => {
        this.router.navigate(['/user']);
        this.toastr.success('Delete success', 'Success');
      },
      (error) => {
        this.toastr.error('Delete failed', 'Error');
      }
    )
  }
}
