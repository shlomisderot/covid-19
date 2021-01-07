import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StateItemComponent } from './ui/state-item.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [StateItemComponent],
  exports: [StateItemComponent]
})
export class StateItemModule {}
