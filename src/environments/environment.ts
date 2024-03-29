// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/rest',
  apiUrlA: 'http://localhost:8080/api/',
  apiUser: '/users',
  apiDriver: '/drivers',
  apiCategory: '/category',
  apiMarka: '/marka',
  apiAuto: '/auto',
  apiBrigada: '/brigada',
  apiBrigadir: '/brigadir',
  apiCategoryPersonal: '/categoryPersonal',
  apiSaleBuy: '/saleBuy',
  apiHarRoute: '/hardRoute',
  apiInfrastruct: '/infrastruct',
  apiPersonal: '/personal',
  apiProblem: '/problem',
  apiRepair: '/repair',
  apiGroup: '/group',
  apiStreet: '/street',
  apiRoute: '/route',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
