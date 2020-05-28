import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-chat-contact-list-item',
  templateUrl: './chat-contact-list-item.component.html',
  styleUrls: ['./chat-contact-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatContactListItemComponent  {

  @Input()
  chatItem: ChatModule.Chat;
}
