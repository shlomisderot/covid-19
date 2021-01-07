import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatePreviewComponent } from './ui/state-preview.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [StatePreviewComponent],
  exports: [StatePreviewComponent]
})
export class StatePreviewModule {}
