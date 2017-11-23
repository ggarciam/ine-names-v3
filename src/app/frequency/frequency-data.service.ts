import { Injectable } from '@angular/core';
import {Name} from './name';
import {ApiService} from './Api/api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NameDataService {

  names: Name[] = [];

  constructor(
    private api: ApiService
  ) { }

  addName(name: Name): Observable<Name> {
    return this.api.createName(name);
  }

  deleteNamebyId(nameId: number): Observable<Name> {
    return this.api.deleteNameById(nameId);
  }

  updateName(name: Name): Observable<Name> {
    return this.api.updateName(name);
  }

  getAllNames(): Observable<Name[]> {
    return this.api.getAllNames();
  }

  getNamebyId(nameId: number): Observable<Name> {
    return this.api.getNameById(nameId);
  }
}
