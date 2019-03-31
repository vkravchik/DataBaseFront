import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {ToastrService} from "ngx-toastr";
import {EditUserComponent} from "../../dialogs/edit/edit-user/edit-user.component";
import {AddUserComponent} from "../../dialogs/add/add-user/add-user.component";
import {pipe} from "rxjs";
import {map} from "rxjs/operators";
import {DialogService} from "../../services/dialog.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'email', 'password', 'actions'];
  dataSource = new MatTableDataSource<User>();

  constructor(private _user: UserService,
              private _dialog: DialogService,
              private router: Router,
              private toastr: ToastrService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getAll();

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAll() {
    this._user.getAll().subscribe((res: any) => {
      this.dataSource.data = res;
    });
  }


  // ANOTHER FUNCTION
  tableClick(id) {
    this._user.getSingle(id).subscribe((res: User) => {
      this.router.navigate(['user/', id])
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(AddUserComponent);

    dialogRef.afterClosed().subscribe(res => {
      if (res === 1) {
        this._user.add(this._dialog.dialogData).subscribe(
          (res: User) => {
            this.dataSource.data.push(res);
            this.dataSource = new MatTableDataSource<User>(this.dataSource.data);
            this.toastr.success('Data saved', 'Success');
          },
          (error) => {
            this.toastr.error('Data do not saved', 'Error');
          })
      }
    })
  }

  startEdit(id) {
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res === 1) {
        this._user.update(this._dialog.dialogData.id, this._dialog.dialogData).subscribe((res: User) => {
            this.toastr.success('Update success', 'Success');

            const foundIndex = this.dataSource.data.findIndex(x => x.id === res.id);
            this.dataSource.data[foundIndex] = res;

            this.dataSource = new MatTableDataSource<User>(this.dataSource.data)

          },
          (error) => {
            this.toastr.error('Updating Error', 'Error')
          });
      }
    })
  }

  deleteItem(id) {
    this._user.delete(id).subscribe(
      (res) => {
        this.dataSource.data = this.dataSource.data.filter(data => data.id !== id);
        this.toastr.success('Delete success', 'Success');
      },
      (error) => {
        this.toastr.error('Delete failed', 'Error');
      }
    )
  }
}
