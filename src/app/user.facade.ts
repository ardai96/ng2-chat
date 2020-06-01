import {ChatModule} from './chat/chat.module';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from "@ngrx/store";
import {selectUser} from "./user/user.selector";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  constructor(private store: Store) {
  }

  public getUser(): Observable<ChatModule.ChatUser> {
    return this.store.pipe(select(selectUser), tap(console.log)) as Observable<ChatModule.ChatUser>;
  }
}

export const MOCK_USER = {
  id: 1,
  name: 'Marcin Krol',
  avatar: 'https://randomuser.me/api/portraits/men/79.jpg',
};
