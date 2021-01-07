import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './components/app.component';
import { RouterModule, Routes } from '@angular/router';
import { StatesService } from './services/states.service';

import { MatchingModule } from '@client/matching';
import { StateItemModule } from '@client/state-item';
import { StatePreviewModule } from '@client/state-preview'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UIModule } from '@client/ui';

import { MainComponent } from './components/main/main.component';
import { PreviewComponent } from './components/preview/preview.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'preview/:id', component: PreviewComponent },
];

@NgModule({
  declarations: [AppComponent, MainComponent, PreviewComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    StateItemModule,
    StatePreviewModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatchingModule,
    UIModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [StatesService],
  bootstrap: [AppComponent],
})
export class AppModule { }
