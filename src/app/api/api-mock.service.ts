import { Injectable } from '@angular/core';
import { Name } from '../names/name';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Frequency } from '../frequency/frequency';

@Injectable()
export class ApiMockService {

  constructor() { }

  public getAllNames(): Observable<Name[]> {
    return Observable.of([
      new Name({id: 1, name: 'Gonzalo', genre: 2})
    ]);
  }

  public createName(name: Name): Observable<Name> {
    return Observable.of(
      new Name({id: 1, name: 'Gonzalo', genre: 2})
    );
  }

  public getNameById(nameId: number): Observable<Name> {
    return Observable.of(
      new Name({id: 1, name: 'Gonzalo', genre: 2})
    );
  }

  public updateName(name: Name): Observable<Name> {
    return Observable.of(
      new Name({id: 1, name: 'Gonzalo', genre: 2})
    );
  }

  public deleteNameById(nameId: number): Observable<null> {
    return null;
  }

  public getAllFrequencies(): Observable<Frequency[]> {
    return Observable.of([
      new Frequency({id: 1, name: 'Gonzalo', provincia: 'Valladolid', total: 12334, permileage: '1.123', name_id: 1, genre: 2})
    ]);
  }

  public createFrequency(frequency: Frequency): Observable<Frequency> {
    return Observable.of(
      new Frequency({id: 1, name: 'Gonzalo', provincia: 'Valladolid', total: 12334, permileage: '1.123', name_id: 1, genre: 2})
    );
  }

  public getFrequencyById(frequencyId: number): Observable<Frequency> {
    return Observable.of(
      new Frequency({id: 1, name: 'Gonzalo', provincia: 'Valladolid', total: 12334, permileage: '1.123', name_id: 1, genre: 2})
    );
  }

  public updateFrequency(frequency: Frequency): Observable<Frequency> {
    return Observable.of(
      new Frequency({id: 1, name: 'Gonzalo', provincia: 'Valladolid', total: 12334, permileage: '1.123', name_id: 1, genre: 2})
    );
  }

  public deleteFrequencyById(frequencyId: number): Observable<null> {
    return null;
  }
}
