import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenphysModule } from 'menphys';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MenphysModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
