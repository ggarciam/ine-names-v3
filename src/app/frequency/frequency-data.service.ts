import { Injectable } from '@angular/core';
import { Frequency } from './frequency';
import { ApiService } from '../Api/api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NameDataService {

  frequencies: Frequency[] = [];

  constructor(
    private api: ApiService
  ) { }

  addFrequency(frequency: Frequency): Observable<Frequency> {
    return this.api.createFrequency(frequency);
  }

  deleteFrequencybyId(frequencyId: number): Observable<Frequency> {
    return this.api.deleteFrequencyById(frequencyId);
  }

  updateFrequency(frequency: Frequency): Observable<Frequency> {
    return this.api.updateFrequency(frequency);
  }

  getAllFrequencies(): Observable<Frequency[]> {
    return this.api.getAllFrequencies();
  }

  getFrequencybyId(frequencyId: number): Observable<Frequency> {
    return this.api.getFrequencyById(frequencyId);
  }
}
