import { UserState } from './user.state';
import { selectUserState } from './../app.state';
import { createSelector } from '@ngrx/store';

export const selectUser = createSelector(
    selectUserState,
    (state: UserState) => state
);
