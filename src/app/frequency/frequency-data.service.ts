import { Injectable } from '@angular/core';
import { Frequency } from './frequency';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs/Observable';
import { FrequencySearch } from './frequencySearch';

@Injectable()
export class FrequencyDataService {

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

  getAllFrequencies(options: FrequencySearch): Observable<Frequency[]> {
    return this.api.getAllFrequencies(options);
  }

  getFrequencybyId(frequencyId: number): Observable<Frequency> {
    return this.api.getFrequencyById(frequencyId);
  }
}
