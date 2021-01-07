import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StatesService } from '../../services/states.service';

@Component({
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
  state: any = {};

  constructor(private route: ActivatedRoute, private service: StatesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getState(params['id']).subscribe(response => {
        debugger
        this.state = response
      });
    });
  }
}
