import { selectChatMessages } from './store/chat.selectors';
import { SocketService } from './socket/socket.service';
import {
  actionInitConnection,
  actionAddNewMessage,
  actionSendChatMessage,
} from './store/chat.actions';
import { MOCK_USER } from './../user.facade';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { SocketEvent } from './socket/socket-event.enum';

@Injectable()
export class ChatFacade {
  constructor(
    private readonly store: Store,
    private readonly socketService: SocketService
  ) {}

  public initConnection(): void {
    this.store.dispatch(actionInitConnection());

    this.socketService
      .onEvent(SocketEvent.MESSAGE)
      .subscribe((message) =>
        this.store.dispatch(actionAddNewMessage(message as ChatModule.ChatMessage))
      );
  }

  public getChatMessages(): Observable<ChatModule.ChatMessage[]> {
    return this.store.select(selectChatMessages);
  }

  public sendMessage(message: ChatModule.SendMessageDTO): void {
    this.store.dispatch(actionSendChatMessage(message));
  }

  public getChatList(): Observable<ChatModule.Chat[]> {
    return MOCK_DATA;
  }

  public getActiveChat(): Observable<ChatModule.Chat> {
    return MOCK_DATA.pipe(map((data: ChatModule.Chat[]) => data[0]));
  }
}

const MOCK_DATA = of([
  {
    avatar: 'https://randomuser.me/api/portraits/men/69.jpg',
    name: 'Studenci UAM',
    lastMessage: `Dlaczego facebook wymyslił fluxa i podstawy NGRX-a, ale tego nie skończyliśmy.
    W przyszlym tygodniu mamy juz programować 😍`,
    date: '12:19',
    id: 1,
    isChatGroup: true,
    messages: [
      {
        id: 'asd122',
        user: MOCK_USER,
        date: '12:17',
        message: 'Co ostatnio bylo na zajeciach?',
      },
      {
        id: 'asd123',
        user: {
          id: 2,
          name: 'Dawid Kedzierski',
          avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
        },
        date: '12:19',
        message: `Dlaczego facebook wymyslił fluxa i podstawy NGRX-a, ale tego nie skończyliśmy.
          W przyszlym tygodniu mamy juz programować 😍`,
      },
    ],
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
    name: 'Dawid Kędzierski',
    lastMessage: 'Vizlib rulez!',
    date: 'Wczoraj',
    id: 2,
    isChatGroup: false,
  },
]);
