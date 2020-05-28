import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ChatModule } from './../../chat.module';
import { UserFacade } from './../../../user.facade';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-chat-content-scrollable',
  templateUrl: './chat-content-scrollable.component.html',
  styleUrls: ['./chat-content-scrollable.component.scss'],
})
export class ChatContentScrollableComponent implements OnInit, OnDestroy {
  @Input()
  public messages: ChatModule.ChatMessage[];

  public user: ChatModule.ChatUser;

  private destroy$: Subject<undefined> = new Subject();

  constructor(private readonly userFacade: UserFacade) {}

  ngOnInit() {
    this.userFacade
      .getUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
