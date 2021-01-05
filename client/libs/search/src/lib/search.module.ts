import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './ui/search.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class SearchModule {}
