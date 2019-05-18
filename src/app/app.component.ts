import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  user: string;

  items = [
    // {title: 'Користувачі', path: '/user', rols: ['admin']},

    {title: 'Car Type', path: '/category', rols: ['admin', 'manager']},
    {title: 'Car Model', path: '/marka', rols: ['admin', 'manager']},

    {title: 'Drivers', path: '/drivers', rols: ['admin', 'driver']},
    {title: 'Autos', path: '/auto', rols: ['admin', 'driver']},

    {title: 'Brigade', path: '/brigada', rols: ['admin', 'brigadir']},
    {title: 'Brigadier', path: '/brigadir', rols: ['admin', 'brigadir']},
    {title: 'Groups', path: '/group', rols: ['admin', 'brigadir']},

    {title: 'Personal Type', path: '/categoryPersonal', rols: ['admin', 'brigadir']},
    {title: 'Personals', path: '/personal', rols: ['admin', 'brigadir']},

    {title: 'Hard Routes', path: '/hardRoute', rols: ['admin', 'brigadir']},
    {title: 'Routes', path: '/route', rols: ['admin', 'brigadir']},

    {title: 'Infrastructs', path: '/infrastruct', rols: ['admin', 'brigadir']},
    {title: 'Streets', path: '/street', rols: ['admin', 'brigadir']},

    {title: 'Problems', path: '/problem', rols: ['admin', 'brigadir']},
    {title: 'Repairs', path: '/repair', rols: ['admin', 'brigadir']},
    {title: 'Sale/Buy', path: '/saleBuy', rols: ['admin', 'brigadir']},


  ];

  queries = [
    {title: 'Query_2', path: '/query2', rols: ['admin']}
  ];

  constructor(private _user: UserService) {

  }

  whoIs(rols) {
    // let user = this._user.getStorageInfo();
    // let roles = rols.concat(' ');
    // return !roles.includes(user);
  }
}

