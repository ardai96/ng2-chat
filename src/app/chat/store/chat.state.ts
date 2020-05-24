import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

export const selectChatState = createFeatureSelector('chat');

export interface ChatState {
    messages: ChatModule.ChatMessage[];
}


