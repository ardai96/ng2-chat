import { createAction, props } from '@ngrx/store';

export const actionSendChatMessage = createAction('[Chat] Send Message', props<ChatModule.SendMessageDTO>());

export const actionAddNewMessage = createAction('[Chat] Add new message', props<ChatModule.ChatMessage>());

export const actionInitConnection = createAction('[Chat] Init connection');

