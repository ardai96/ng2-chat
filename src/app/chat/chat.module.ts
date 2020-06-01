import { ChatEffects } from './store/chat.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChatContentMessageSenderComponent } from './chat-content/chat-content-message-sender/chat-content-message-sender.component';
import { ChatMessageComponent } from './chat-content/chat-content-scrollable/chat-message/chat-message.component';
import { ChatContentScrollableComponent } from './chat-content/chat-content-scrollable/chat-content-scrollable.component';
import { ChatFacade } from './chat.facade';
import { ChatContentHeaderComponent } from './chat-content/chat-content-header/chat-content-header.component';
import { ChatContactListItemComponent } from './chat-contact-list/chat-contact-list-item/chat-contact-list-item.component';
import { SearchModule } from './../search/search.module';
import { MatButtonModule } from '@angular/material/button';
import { ChatContactListComponent } from './chat-contact-list/chat-contact-list.component';
import { MatIconModule } from '@angular/material/icon';
import { ChatContentComponent } from './chat-content/chat-content.component';
import { ChatSideMenuComponent } from './chat-side-menu/chat-side-menu.component';
import { ChatRoutes } from './chat.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { chatReducer } from './store/chat.reducer';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutes,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    SearchModule,
    ReactiveFormsModule,
    StoreModule.forFeature('chat', chatReducer),
    EffectsModule.forFeature([ChatEffects])
  ],
  declarations: [
    ChatComponent,
    ChatSideMenuComponent,
    ChatContentComponent,
    ChatContactListComponent,
    ChatContactListItemComponent,
    ChatContentHeaderComponent,
    ChatContentScrollableComponent,
    ChatMessageComponent,
    ChatContentMessageSenderComponent
  ],
  providers: [
    ChatFacade
  ]
})
export class ChatModule {}
