import { takeUntil, tap } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { ChatFacade } from './../chat.facade';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss'],
})
export class ChatContentComponent implements OnInit, OnDestroy {
  public activeChat: ChatModule.Chat;
  public messages$: Observable<ChatModule.ChatMessage[]>;
  private destroy$: Subject<undefined> = new Subject();

  constructor(private readonly chatFacade: ChatFacade) {}

  ngOnInit() {
    this.chatFacade
      .getActiveChat()
      .pipe(takeUntil(this.destroy$))
      .subscribe((activeChat) => (this.activeChat = activeChat));
      this.messages$ = this.chatFacade.getChatMessages();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
