import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";
import { reducers } from "src/app/store/app.state";
import { environment } from './../environments/environment.prod';
import { ENVIRONMENT, Environment } from './../environments/environment.model';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
  ],
  providers: [
    { provide: ENVIRONMENT, useValue: environment }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
