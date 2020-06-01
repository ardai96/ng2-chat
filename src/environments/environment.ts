import { Environment } from './environment.model';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: Environment = {
  production: false,
  SOCKET_SERVER: 'https://chat-for-uam-students.herokuapp.com/',
  jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWFyemFyNUBzdC5hbXUuZWR1LnBsIiwiYXZhdGFyIjoiaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvbWVuLzIxLmpwZyIsImlkIjozLCJpYXQiOjE1OTA0MTMyNjAsImV4cCI6MTYyMTk0OTI2MH0.FIOJ7UuIcZDaK9R3tgVClblDKICqvU4G90jxy3qs7O8'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
