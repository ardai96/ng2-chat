import * as jwtDecode from 'jwt-decode';
import {environment} from "../../environments/environment";
import {createReducer} from "@ngrx/store";

export const initialState = {
  ...jwtDecode(environment.jwt)
};

const _userReducer = createReducer(initialState, );

export function userReducer(state, action) {
  return _userReducer(state, action);
}

