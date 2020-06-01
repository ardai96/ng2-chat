import { createReducer, on} from '@ngrx/store';
import {addNewMessageAction} from "./chat.actions";
import {ChatState} from './chat.state';

export const initialState = {
  messages: []
};

const _chatReducer = createReducer(
  initialState,
  on(addNewMessageAction, (state: ChatState, message: ChatModule.ChatMessage) => {
    return {
      ...state,
      messages: [...state.messages, message]
    };
  })
);

export function chatReducer(state, action) {
  return _chatReducer(state, action);
}
