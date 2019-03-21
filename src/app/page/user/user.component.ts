import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {MatDialog, MatSort, MatTableDataSource} from "@angular/material";
import {ToastrService} from "ngx-toastr";
import {EditUserComponent} from "../../dialogs/edit/edit-user/edit-user.component";
import {DeleteUserComponent} from "../../dialogs/delete/delete-user/delete-user.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'email', 'password', 'actions'];
  users = new MatTableDataSource<User>();
  newUser = {
    email: null,
    password: null
  };

  constructor(private _user: UserService,
              private router: Router,
              private toastr: ToastrService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.refresh();
  }

  tableClick(id) {
    this._user.getSingle(id).subscribe((res: User) => {
      this.router.navigate(['user/', id])
    });
  }

  addUser() {
    if(this.newUser.email !== null && this.newUser.password !== null) {
      this._user.add(this.newUser).subscribe(
        (res: any) => {
          this.refresh();
        },
        (error) => {
          this.toastr.error('Data do not saved', 'Error')
        })
    } else {
      this.toastr.error('Enter valid data', 'Error');
    }
  }

  refresh() {
    this._user.getAll().subscribe((res: any) => {
      this.users.data = res;
    });
  }

  addNew() {

  }

  startEdit(id) {
    // const dialogRef = this.dialog.open(EditUserComponent, {
    //   data: {id: id}
    // });
    //
    // dialogRef.afterClosed().subscribe(res => {
    //   if(res === 1) {
    //     this._user.update(this._user.dialogData.id, this._user.dialogData).subscribe((res: User) => {
    //         this.toastr.success('Update success', 'Success');
    //         this.router.navigate(['/user']);
    //       },
    //       (error) => {this.toastr.error('Updating Error', 'Error')
    //       });
    //   }
    // })

    this._user.getSingle(id).subscribe((res: User) => {
      this.router.navigate(['user/', id])
    });
  }

  deleteItem(id) {
    this._user.delete(id).subscribe(
      (res) => {
        this.users.data = this.users.data.filter(data => data.id !== id);
        this.toastr.success('Delete success', 'Success');
      },
      (error) => {
        this.toastr.error('Delete failed', 'Error');
      }
    )
  }
}
