import { environment } from '../environments/environment.prod';
import { ENVIRONMENT } from '../environments/environment.model';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StoreModule} from "@ngrx/store";
import * as fromUser from './user/user.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({user: fromUser.userReducer})
  ],
  providers: [
    { provide: ENVIRONMENT, useValue: environment }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
