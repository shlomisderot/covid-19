import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StatesService } from '../services/states.service';

@Component({
  selector: 'client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [StatesService]
})
export class AppComponent {
  title = 'states';
  states:any[];

  constructor(private service: StatesService) {

  }

  ngOnInit() {
    this.service.getStates().subscribe(response => {
      this.states = response
    });
  }
}
