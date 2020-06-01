import { selectUserState } from './../../store/app.state';
import { SocketService } from './../socket/socket.service';
import {
    actionInitConnection,
    actionSendChatMessage,
    actionAddMessage,
} from './chat.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { tap, map, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class ChatEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly store: Store<AppState>,
        private readonly socketService: SocketService
    ) { }

    public connectionEffect$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(actionInitConnection),
                tap(() => this.socketService.initSocket())
            );
        },
        { dispatch: false }
    );

    public sendMessageEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(actionSendChatMessage),
            tap((action) => this.socketService.send(action)),
            withLatestFrom(this.store.select(selectUserState)),
            map(([action, user]: [ChatModule.SendMessageDTO, any]) =>
                actionAddMessage({
                    message: action.message,
                    user: { ...user },
                    date: new Date().toISOString(),
                    id: undefined
                })
            )
        );
    });
}