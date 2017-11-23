import { TestBed, inject } from '@angular/core/testing';

import { NameDataService } from '../names/name-data.service';

describe('NameDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NameDataService]
    });
  });

  it('should be created', inject([NameDataService], (service: NameDataService) => {
    expect(service).toBeTruthy();
  }));
});
