import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Internatisation 
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

import { AppComponent } from './app.component';
import { StarWarComponent } from './star-war/star-war.component';
import { StarwarDetailComponent } from './starwar-detail/starwar-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StarwarSearchComponent } from './starwar-search/starwar-search.component';

@NgModule({
  declarations: [
    AppComponent,
    StarWarComponent,
    StarwarDetailComponent,
    MessagesComponent,
    PagenotfoundComponent,
    StarwarSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
