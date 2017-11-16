import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, Response, RequestOptions, Headers, HttpModule} from '@angular/http';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
