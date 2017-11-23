import { TestBed, inject } from '@angular/core/testing';

import { FrequencyDataService } from '../frequency/frequency-data.service';
import { ApiService } from '../api/api.service';
import { ApiMockService } from '../api/api-mock.service';

describe('FrequencyDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrequencyDataService, {
        provide: ApiService,
        useClass: ApiMockService
      }]
    });
  });

  it('should be created', inject([FrequencyDataService], (service: FrequencyDataService) => {
    expect(service).toBeTruthy();
  }));
});
