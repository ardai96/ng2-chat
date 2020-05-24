import { actionAddNewMessage } from './chat.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { ChatState } from './chat.state';

export const initialState: ChatState = {
    messages: []
};

const reducer = createReducer(
    initialState,
    on(actionAddNewMessage, (state: ChatState, message: ChatModule.ChatMessage) => {
        return {
            ...state,
            messages: [...state.messages, message]
        };
    })
);

export function chatReducer(state: ChatState | undefined, action: Action) {
    return reducer(state, action);
}
