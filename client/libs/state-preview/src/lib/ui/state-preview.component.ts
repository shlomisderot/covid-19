import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-state-preview',
  templateUrl: './state-preview.component.html',
  styleUrls: ['./state-preview.component.scss']
})
export class StatePreviewComponent implements OnInit {

  @Input() state: any;

  constructor() { }

  ngOnInit(): void {

    console.log(this.state)
  }

}
