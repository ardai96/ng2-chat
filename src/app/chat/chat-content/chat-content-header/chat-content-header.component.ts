import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-chat-content-header',
  templateUrl: './chat-content-header.component.html',
  styleUrls: ['./chat-content-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatContentHeaderComponent {

  @Input()
  activeChat: ChatModule.Chat;

}
