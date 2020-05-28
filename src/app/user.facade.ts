import { Store } from "@ngrx/store";
import { tap } from "rxjs/operators";
import { ChatModule } from './chat/chat.module';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import * as jwtDecode from 'jwt-decode';
import { AppState, selectUserState } from './store/app.state';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  constructor(private store: Store<AppState>) {}

  public getUser(): Observable<ChatModule.ChatUser> {
    return this.store.select(selectUserState).pipe(tap(console.log));
  }
}

export const MOCK_USER = {
  id: 1,
  name: 'Marcin Krol',
  avatar: 'https://randomuser.me/api/portraits/men/79.jpg',
};
