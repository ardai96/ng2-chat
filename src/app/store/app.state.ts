import { UserState } from './user/user.state';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { userReducer } from './user/user.reducer';

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer
};

export interface AppState {
  user: UserState;
}

export const selectUserState = createFeatureSelector('user');
