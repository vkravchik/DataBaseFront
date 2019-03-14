import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'password'];
  users: User[];

  constructor(private _user: UserService,
              private router: Router) { }

  ngOnInit() {
    this._user.getAll().subscribe((res: User[]) => {
      this.users = res;
    })
  }

  tableClick(id) {
    this._user.getSingle(id).subscribe((res: User) => {
      this.router.navigate(['user/', id])
    });
  }
}
