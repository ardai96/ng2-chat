import { selectUserState } from './store/app.state';
import { ChatModule } from './chat/chat.module';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import * as jwtDecode from 'jwt-decode';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  constructor(
    private readonly store: Store
  ) {}

  public getUser(): Observable<ChatModule.ChatUser> {
    return this.store.select(selectUserState) as Observable<ChatModule.ChatUser>;
  }
}

export const MOCK_USER = {
  id: 1,
  name: 'Marcin Krol',
  avatar: 'https://randomuser.me/api/portraits/men/79.jpg',
};
