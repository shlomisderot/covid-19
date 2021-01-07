import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { find, map, tap } from 'rxjs/operators';

@Injectable()
export class StatesService {

  stateNames: any = {
    AK: 'Alaska',
    AL: 'Alabama',
    AR: 'Arkansas',
    AS: 'American Samoa',
    AZ: 'Arizona',
    CA: 'California',
    CO: 'Colorado',
    CT: 'Connecticut',
    DC: 'District of Columbia',
    DE: 'Delaware',
    FL: 'Florida',
    GA: 'Georgia',
    GU: 'Guam',
    HI: 'Hawaii',
    IA: 'Iowa',
    ID: 'Idaho',
    IL: 'Illinois',
    IN: 'Indiana',
    KS: 'Kansas',
    KY: 'Kentucky',
    LA: 'Louisiana',
    MA: 'Massachusetts',
    MD: 'Maryland',
    ME: 'Maine',
    MI: 'Michigan',
    MN: 'Minnesota',
    MO: 'Missouri',
    MP: 'Northern Mariana Islands',
    MS: 'Mississippi',
    MT: 'Montana',
    NC: 'North Carolina',
    ND: 'North Dakota',
    NE: 'Nebraska',
    NH: 'New Hampshire',
    NJ: 'New Jersey',
    NM: 'New Mexico',
    NV: 'Nevada',
    NY: 'New York',
    OH: 'Ohio',
    OK: 'Oklahoma',
    OR: 'Oregon',
    PA: 'Pennsylvania',
    PR: 'Puerto Rico',
    RI: 'Rhode Island',
    SC: 'South Carolina',
    SD: 'South Dakota',
    TN: 'Tennessee',
    TX: 'Texas',
    UT: 'Utah',
    VA: 'Virginia',
    VI: 'US Virgin Islands',
    VT: 'Vermont',
    WA: 'Washington',
    WI: 'Wisconsin',
    WV: 'West Virginia',
    WY: 'Wyoming'
  };

  statesChange: Subject<any[]> = new Subject<any[]>();

  private _states: any[] = null;

  get states() {
    return this._states;
  }

  set states(states: any[]) {
    this._states = states;
    this.statesChange.next(this._states)
  }

  constructor(private http: HttpClient) { }

  getStates(): Observable<any> {
    return this.http.get('/api/states').pipe(
      map(response => (response as any).data),

      map(items => {
        return items.map(item => ({
          name: this.stateNames[item.state],
          ...item
        }))
      })
    );
  }

  getState(code: any) : Observable<any> {
    return this.http.get('/api/states').pipe(
      map(response => (response as any).data),
      map(items => {
        return items.map(item => ({
          name: this.stateNames[item.state],
          ...item
        }))
      }),
      map(items => {
        return items.find(item => item.state == code);
      })
    );
  }

  getStateName(code: string): string {
    return this.stateNames[code] || '';
  }

  getStatesInfo(): Observable<any> {
    return this.http.get('/api/states/info').pipe(
      map(response => (response as any).data),
      map(items => {
        return items.map(item => ({
          name: this.stateNames[item.state],
          ...item
        }))
      }),
      tap(_ => console.log(_))
    );
  }

  loadStates(): void {
    if (this.states == null) {
      this.http.get('/api/states/info').pipe(
        map(response => (response as any).data),
        map(items => {
          this.states = items.map(item => ({
            name: this.stateNames[item.state],
            ...item
          }));
        }),
        tap(_ => console.log(_))
      );
    }
  }
}
