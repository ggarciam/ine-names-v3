import { TestBed, inject } from '@angular/core/testing';
import { Name } from './name';
import { NameDataService } from './name-data.service';
import { ApiService } from '../api/api.service';
import { ApiMockService } from '../api/api-mock.service';

describe('NameDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NameDataService, {
        provide: ApiService,
        useClass: ApiMockService
      }]
    });
  });

  it('should be created', inject([NameDataService], (service: NameDataService) => {
    expect(service).toBeTruthy();
  }));

  // describe('#getAllNames()', () => {
  //   it('should return an empty array by default', inject([NameDataService], (service: NameDataService) => {
  //     expect(service.getAllNames()).toEqual([]);
  //   }));
  //
  //   it('should return all names', inject([NameDataService], (service: NameDataService) => {
  //     const name1 = new Name({id: 1, name: 'Gonzalo', genre: 2});
  //     const name2 = new Name({id: 2, name: 'Maria', genre: 1});
  //     service.addName(name1);
  //     service.addName(name2);
  //     expect(service.getAllNames()).toEqual([name1, name2]);
  //   }));
  // });
});
