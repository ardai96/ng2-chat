import { Component, OnInit } from '@angular/core';
import {ChatFacade} from './chat.facade';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private facade: ChatFacade) { }

  ngOnInit() {
    this.facade.initConnection();
  }

}
