import { ChatModule } from './chat/chat.module';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import * as jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserFacade {
  constructor() {}

  public getUser(): Observable<ChatModule.ChatUser> {
    return of(jwtDecode(environment.jwt));
  }
}

export const MOCK_USER = {
  id: 1,
  name: 'Marcin Krol',
  avatar: 'https://randomuser.me/api/portraits/men/79.jpg',
};
