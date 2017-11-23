import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';

import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Name } from './name';

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
  public createName(name: Name): Observable<Name> {
    // will use this.http.post()
    return this.http
      .post(API_URL + '/names', name)
      .map(response => {
        return new Name(response.json());
      })
      .catch(this.handleError);
  }

  // API: GET /names/:id
  public getNameById(nameId: number): Observable<Name> {
    // will use this.http.get()
    return this.http
      .get(API_URL + '/names')
      .map(response => {
        return new Name(response.json());
      })
      .catch(this.handleError);
  }

  // API: PUT /names/:id
  public updateName(name: Name): Observable<Name> {
    // will use this.http.put()
    return this.http
      .put(API_URL + '/names/' + name.id, name)
      .map(response => {
        return new Name(response.json());
      })
      .catch(this.handleError);
  }

  // DELETE /names/:id
  public deleteNameById(nameId: number): Observable<null> {
    // will use this.http.delete()
    return this.http
      .delete(API_URL + '/names' + nameId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
