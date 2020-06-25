import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {ChatFacade} from './../chat.facade';
import {Component, OnDestroy, OnInit} from '@angular/core';
import ChatMessage = ChatModule.ChatMessage;

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss'],
})
export class ChatContentComponent implements OnInit, OnDestroy {
  public activeChat: ChatModule.Chat;
  public messages$: ChatMessage[];

  private destroy$: Subject<undefined> = new Subject();

  constructor(private readonly chatFacade: ChatFacade) {
  }

  ngOnInit() {
    this.chatFacade
      .getActiveChat()
      .pipe(takeUntil(this.destroy$))
      .subscribe((activeChat) => (this.activeChat = activeChat));

    this.chatFacade
      .getMessages()
      .pipe(takeUntil(this.destroy$))
      .subscribe(messages => this.messages$ = messages)
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
