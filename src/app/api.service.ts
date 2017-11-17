import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';

import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http) {
  }

  // API: GET /names
  public getAllNames(): Observable<Name[]> {
    return this.http
      .get(API_URL + '/names')
      .map(response => {
        const names = response.json();
        return names.map((name) => new Name(name));
      })
      .catch(this.handleError);
  }

  // API: POST /names
  public createName(name: Name) {
    // will use this.http.post()
  }

  // API: GET /names/:id
  public getNameById(nameId: number) {
    // will use this.http.get()
  }

  // API: PUT /names/:id
  public updateName(name: Name) {
    // will use this.http.put()
  }

  // DELETE /names/:id
  public deleteNameById(nameId: number) {
    // will use this.http.delete()
  }
}
