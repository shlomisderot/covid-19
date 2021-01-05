import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatePreviewComponent } from './ui/state-preview.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StatePreviewComponent],
  exports: [StatePreviewComponent]
})
export class StatePreviewModule {}
