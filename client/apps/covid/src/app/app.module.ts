import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http'

import { AppComponent } from './app.component';

import { MatchingModule } from '@client/matching';
import { SearchModule } from '@client/search';
import { StateItemModule } from '@client/state-item';
import { StatePreviewModule } from '@client/state-preview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, MatchingModule, SearchModule, StateItemModule, StatePreviewModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
