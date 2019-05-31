import {Component} from '@angular/core';
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
    {title: 'Query_1', path: '/query1', rols: ['admin'], tip: "Одержати дані про автопарк підприємства"},
    {
      title: 'Query_2',
      path: '/query2',
      rols: ['admin'],
      tip: "Одержати перелік та загальну кількість водіїв загалом та вказаного авто"
    },
    {title: 'Query_3', path: '/query3', rols: ['admin'], tip: "Одержати розподіл водіїв за автомобілями"},
    {
      title: 'Query_4',
      path: '/query4',
      rols: ['admin'],
      tip: "Одержати дані про розподіл пасажирського автотранспорту за аршрутами"
    },
    {
      title: 'Query_6',
      path: '/query6',
      rols: ['admin'],
      tip: "Одержати інформацію про кількість ремонтів та їх вартість для\n" +
        "автотранспорту певної категорії, окремої марки автотранспорту або\n" +
        "зазначеного автомобіля протягом вказаного періоду"
    },
    {
      title: 'Query_7',
      path: '/query7',
      rols: ['admin'],
      tip: "Одержати дані про підпорядкованість персоналу: робітники, бригадири"
    },
    {
      title: 'Query_8',
      path: '/query8',
      rols: ['admin'],
      tip: "Одержати відомості про наявність гаражів загалом та для кожної\n" +
        "категорії транспорту"
    },
    {
      title: 'Query_9',
      path: '/query9',
      rols: ['admin'],
      tip: "Одержати дані про розподіл автотранспорту на підприємстві"
    },
    {
      title: 'Query_10',
      path: '/query10',
      rols: ['admin'],
      tip: "Одержати відомості про вантажоперевезення, виконані вказаним\n" +
        "автомобілем протягом вказаного періоду часу"
    },
    {
      title: 'Query_11',
      path: '/query11',
      rols: ['admin'],
      tip: "Одержати дані про кількість використаних для ремонту вказаних\n" +
        "вузлів та агрегатів для транспорту вказаної категорії"
    },
    {
      title: 'Query_12',
      path: '/query12',
      rols: ['admin'],
      tip: "Одержати інформацію про отриману та списану автотехніку протягом\n" +
        "вказаного періоду часу"
    },
    {title: 'Query_13', path: '/query13', rols: ['admin'], tip: "Одержати список підлеглих вказаного бригадира"},
    {
      title: 'Query_14',
      path: '/query14',
      rols: ['admin'],
      tip: "Одержати інформацію про роботи, виконані вказаним фахівцем\n" +
        "протягом вказаного періоду загалом та стосовно конкретного\n" +
        "автомобіля"
    },
  ];

  constructor(private router: Router) {
    console.log(this.router.url);
  }
}

