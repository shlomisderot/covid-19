import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { MatchingModule } from '@client/matching';
import { SearchModule } from '@client/search';
import { StateItemModule } from '@client/state-item';
import { StatePreviewModule } from '@client/state-preview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { UIModule } from '@client/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatchingModule,
    FlexLayoutModule,
    SearchModule,
    StateItemModule,
    StatePreviewModule,
    BrowserAnimationsModule,
    UIModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
