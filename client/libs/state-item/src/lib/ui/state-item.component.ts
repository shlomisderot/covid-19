import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-state-item',
  templateUrl: './state-item.component.html',
  styleUrls: ['./state-item.component.scss']
})
export class StateItemComponent implements OnInit {

  @Input()
  state: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.state)
  }

}
