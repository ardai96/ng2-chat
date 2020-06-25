import {AppState} from '../../app.state';
import {createSelector} from '@ngrx/store';
import {ChatState} from './chat.state';

export const selectUserFeature = (state: AppState) => state.chat;

export const selectChatMessages = createSelector(selectUserFeature,
  (state: ChatState) => state.messages);

