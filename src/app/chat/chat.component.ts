import { ChatFacade } from './chat.facade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(
    private readonly chatFacade: ChatFacade
  ) { }

  ngOnInit() {
    this.chatFacade.initConnection();
  }

}
