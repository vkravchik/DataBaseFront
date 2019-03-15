import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {MatSort, MatTableDataSource} from "@angular/material";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'email', 'password'];
  users = new MatTableDataSource<User>();
  // users: User[];
  newUser = {
    email: null,
    password: null
  };

  constructor(private _user: UserService,
              private router: Router,
              private toastr: ToastrService) { }

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
}
