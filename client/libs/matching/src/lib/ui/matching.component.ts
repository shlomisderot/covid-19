import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss']
})
export class MatchingComponent implements OnInit {


  @Input()
  name: string;

  constructor() { }

  ngOnInit(): void {
    
  }

}
