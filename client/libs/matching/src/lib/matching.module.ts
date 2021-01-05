import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchingComponent } from './ui/matching.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MatchingComponent],
  exports: [MatchingComponent],
})
export class MatchingModule {}
