import {AppState} from '../app.state';
import {createSelector} from "@ngrx/store";
import {UserState} from "./user.state";

export const selectUserFeature = (state: AppState) => state.user;

export const selectUser = createSelector(selectUserFeature,
  (state: UserState) => state);
