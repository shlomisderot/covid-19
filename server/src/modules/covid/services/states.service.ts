import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class StatesService {
  private baseApiUrl: string = 'https://covidtracking.com/api/states';

  constructor(private http: HttpService) { }

  getStates(): Observable<any[]> {
    return this.http.get(this.baseApiUrl).pipe(
      map(response => response.data)
    );
  }

  getStateDaily(): Observable<any[]> {
    return this.http.get(`${this.baseApiUrl}/daily`).pipe(
      map(response => response.data)
    );
  }

  getInfo(): Observable<any[]> {
    return this.http.get(`${this.baseApiUrl}/info`).pipe(
      map(response => response.data)
    );
  }
}
