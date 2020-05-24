import { SocketEvent } from './socket-event.enum';
import { environment } from '../../../environments/environment';
import { Injectable, Inject } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket;

  public initSocket(): void {
    this.socket = io(environment.SOCKET_SERVER);
  }

  public send(message: ChatModule.SendMessageDTO): void {
    this.socket.emit(SocketEvent.MESSAGE, { ...message, jwt: environment.jwt });
  }

  public onEvent(event: SocketEvent): Observable<unknown> {
    return new Observable<unknown>(observer => {
      this.socket.on(event, (data: unknown) => observer.next(data));
    });
  }
}
