import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'covid';
  states: any[] = [];


  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get('/api/states').subscribe((response) => {
      console.log(response);
    });
  }
}
