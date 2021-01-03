import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cat } from './interfaces/covid.interface';

@Injectable()
export class CovidService {

  private readonly cats: Cat[] = [];

  constructor(private http: HttpService) { }

  getStates(): Observable<any[]> {
    return this.http.get('https://covidtracking.com/api/states').pipe(
      map(response => response.data)
    );
  }

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
