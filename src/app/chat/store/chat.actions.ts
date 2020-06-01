import {createAction, props} from '@ngrx/store';

export const sendChatMessageAction = createAction('[Chat] Send message', props<ChatModule.SendMessageDTO>());

export const addNewMessageAction = createAction('[Chat] Add new message', props<ChatModule.ChatMessage>());

export const initConnectionAction = createAction('[Chat] Init connection');
