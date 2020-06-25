import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AppState} from '../../app.state';
import {Store} from '@ngrx/store';
import {SocketService} from '../socket/socket.service';
import {map, tap, withLatestFrom} from 'rxjs/operators';
import {addNewMessageAction, initConnectionAction, sendChatMessageAction} from './chat.actions';
import {selectUser} from '../../user/user.selector';

@Injectable()
export class ChatEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store<AppState>,
    private readonly socketService: SocketService
  ) {}

  public connectionEffect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(initConnectionAction),
        tap(() => this.socketService.initSocket())
      );
    },
    { dispatch: false }
  );

  public sendMessageEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sendChatMessageAction),
      tap((action) => this.socketService.send(action)),
      withLatestFrom(this.store.select(selectUser)),
      map(([action, user]: [ChatModule.SendMessageDTO, any]) =>
        addNewMessageAction({
          message: action.message,
          user: { ...user },
          date: new Date().toISOString(),
          id: undefined
        })
      )
    );
  });
}
