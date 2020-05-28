import { Environment } from './environment.model';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: Environment = {
  production: false,
  SOCKET_SERVER: 'https://chat-for-uam-students.herokuapp.com/',
  jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFyemVic2thLmVkeXRhQGdtYWlsLmNvbSIsImF2YXRhciI6Imh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lbi8yNi5qcGciLCJpZCI6OCwiaWF0IjoxNTkwNDEzMzU3LCJleHAiOjE2MjE5NDkzNTd9.ubxC_tBVgXJ4iWOAHKuvZN61Ri53SIEwZQRqHfvzonk'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
