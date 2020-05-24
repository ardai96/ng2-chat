import { takeUntil } from 'rxjs/operators';
import { ChatFacade } from './../chat.facade';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-chat-contact-list',
  templateUrl: './chat-contact-list.component.html',
  styleUrls: ['./chat-contact-list.component.scss'],
})
export class ChatContactListComponent implements OnInit, OnDestroy {
  public chatItems: Observable<ChatModule.Chat[]>;

  public activeChat: ChatModule.Chat;

  private destroy$: Subject<undefined> = new Subject();

  constructor(private readonly chatFacade: ChatFacade) {}

  ngOnInit() {
    this.chatItems = this.chatFacade.getChatList();

    this.chatFacade
      .getActiveChat()
      .pipe(takeUntil(this.destroy$))
      .subscribe((activeChat) => (this.activeChat = activeChat));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
