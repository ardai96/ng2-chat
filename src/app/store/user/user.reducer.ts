import { environment } from './../../../environments/environment';
import { UserState } from './user.state';
import * as jwtDecode from 'jwt-decode';
import { createReducer, Action } from '@ngrx/store';

export const initalState: UserState = {
    ...jwtDecode(environment.jwt)
};

const reducer = createReducer(
    initalState
);

export function userReducer(state: UserState | undefined, action: Action): UserState {
    return reducer(state, action);
}
