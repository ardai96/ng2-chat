import { Environment } from "./environment.model";
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: Environment = {
  production: false,
  SOCKET_SERVER: "https://chat-for-uam-students.herokuapp.com/",
  jwt:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWF0aHlwQHN0LmFtdS5lZHUucGwiLCJhdmF0YXIiOiJodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZW4vMzkuanBnIiwiaWQiOjIxLCJpYXQiOjE1OTA0MTM1ODQsImV4cCI6MTYyMTk0OTU4NH0.fB8LoRcgnHC1GGtATLJ-LhyyI_OEWpTW8n7D_AiaCNY",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
