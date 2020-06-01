import { createAction, props } from '@ngrx/store';

export const actionSendChatMessage = createAction('[Chat] Send Message', props<ChatModule.SendMessageDTO>());
export const actionAddMessage = createAction('[Chat] Add message', props<ChatModule.ChatMessage>());
export const actionReceiveMessage = createAction('[Chat] Receive message', props<ChatModule.ChatMessage>());
export const actionInitConnection = createAction('[Chat] Initialize connection');