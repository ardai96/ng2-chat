import { MOCK_USER } from './../user.facade';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ChatFacade {
  constructor() {}

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
