import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  queryFlag = false;

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
    {title: 'Query_1', path: '/query1', rols: ['admin']},
    {title: 'Query_2', path: '/query2', rols: ['admin']},
    {title: 'Query_3', path: '/query3', rols: ['admin']},
    {title: 'Query_4', path: '/query4', rols: ['admin']},
    {title: 'Query_6', path: '/query6', rols: ['admin']},
    {title: 'Query_7', path: '/query7', rols: ['admin']},
    {title: 'Query_8', path: '/query8', rols: ['admin']},
    {title: 'Query_9', path: '/query9', rols: ['admin']},
    {title: 'Query_10', path: '/query10', rols: ['admin']}
  ];

  constructor(private router: Router) {
    console.log(this.router.url);
  }
}

