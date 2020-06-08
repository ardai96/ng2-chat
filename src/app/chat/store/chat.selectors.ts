import { selectChatState, ChatState } from './chat.state';
import { createSelector } from '@ngrx/store';

export const selectChatMessages = createSelector(
    selectChatState,
    (state: ChatState) => state.messages
);