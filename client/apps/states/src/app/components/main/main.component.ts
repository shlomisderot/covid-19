import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StatesService } from '../../services/states.service';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  states: any[];

  constructor(private service: StatesService) { }

  ngOnInit() {
    this.service.getStates().subscribe(response => {
      this.states = response
    });
  }
}
