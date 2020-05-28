import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ChatFacade } from './../chat.facade';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss'],
})
export class ChatContentComponent implements OnInit, OnDestroy {
  public activeChat: ChatModule.Chat;

  private destroy$: Subject<undefined> = new Subject();

  constructor(private readonly chatFacade: ChatFacade) {}

  ngOnInit() {
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
