import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateItemComponent } from './ui/state-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StateItemComponent],
  exports: [StateItemComponent]
})
export class StateItemModule {}
