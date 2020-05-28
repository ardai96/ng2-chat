import { InjectionToken } from '@angular/core';

export const ENVIRONMENT = new InjectionToken('env');

export interface Environment {
    SOCKET_SERVER: string;
    production: boolean;
    jwt: string;
}
