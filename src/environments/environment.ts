import { Environment } from './environment.model';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const MK = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFyY2luIEtyb2wiLCJhdmF0YXIiOiJodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy9tZW4vNzkuanBnIiwiaWQiOjEsImlhdCI6MTU5MDI2OTA1NCwiZXhwIjoxNjIxODA1MDU0fQ.QhkcAWnO85QiI-4pHFBal9ItOU6ygMdUNufQR42vDJs'
const DK = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGF3aWQgS2VkemllcnNraSIsImF2YXRhciI6Imh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL21lbi85OS5qcGciLCJpZCI6MiwiaWF0IjoxNTkwMjY5NzQxLCJleHAiOjE2MjE4MDU3NDF9.aWn7ricxL2VFQkf1z7sKOFUvipXVmwwQcbkM5wO4RpA'

export const environment: Environment = {
  production: false,
  SOCKET_SERVER: 'https://chat-for-uam-students.herokuapp.com/',
  jwt: Math.random() > 0.5 ? MK : DK
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
