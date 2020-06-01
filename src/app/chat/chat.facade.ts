import {MOCK_USER} from '../user.facade';
import {Injectable, OnDestroy} from '@angular/core';
import {Observable, of, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {SocketService} from "./socket/socket.service";
import {Store} from "@ngrx/store";
import {addNewMessageAction, initConnectionAction, sendChatMessageAction} from "./store/chat.actions";
import {selectChatMessages} from "./store/chat.selector";
import {SocketEvent} from "./socket/socket-event.enum";
import ChatMessage = ChatModule.ChatMessage;
import SendMessageDTO = ChatModule.SendMessageDTO;

@Injectable()
export class ChatFacade implements OnDestroy {
  private messagesSubscription: Subscription;
  constructor(private socketService: SocketService,
              private store: Store) {
  }

  public getChatList(): Observable<ChatModule.Chat[]> {
    return MOCK_DATA;
  }

  public initConnection(): void {
    this.store.dispatch(initConnectionAction());
    this.messagesSubscription = this.socketService
      .onEvent(SocketEvent.MESSAGE)
      .subscribe(message => this.store.dispatch(addNewMessageAction(message as ChatMessage)));
  }

  public getMessages(): Observable<ChatMessage[]> {
    return this.store.select(selectChatMessages);
  }

  public sendMessage(message: SendMessageDTO): void {
    this.store.dispatch(sendChatMessageAction(message));
  }

  public getActiveChat(): Observable<ChatModule.Chat> {
    return MOCK_DATA.pipe(map((data: ChatModule.Chat[]) => data[0]));
  }

  ngOnDestroy(): void {
    if (this.messagesSubscription) {
      this.messagesSubscription.unsubscribe();
    }
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
        message:
          `Dlaczego facebook wymyslił fluxa i podstawy NGRX-a, ale tego nie skończyliśmy.
          W przyszlym tygodniu mamy juz programować 😍`,
      }
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
