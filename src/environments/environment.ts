import { Environment } from './environment.model';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: Environment = {
  production: false,
  SOCKET_SERVER: 'https://chat-for-uam-students.herokuapp.com/',
  jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWxlc2FkM0BzdC5hbXUuZWR1LnBsIiwiYXZhdGFyIjoiaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvbWVuLzQwLmpwZyIsImlkIjoyMiwiaWF0IjoxNTkwNDEzNTk4LCJleHAiOjE2MjE5NDk1OTh9.qv1KIgRoQMoilOaue0VukDzx03Eyo3hdGx1kZqlEaKE'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
