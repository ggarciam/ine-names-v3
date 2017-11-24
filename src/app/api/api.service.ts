import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Http, Response } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Name } from '../names/name';
import { Frequency } from '../frequency/frequency';
import { FrequencySearch } from '../frequency/frequencySearch';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
  params = new HttpParams();

  constructor(private http: HttpClient) {
  }

  // API: GET /names
  public getAllNames(): Observable<Name[]> {
    return this.http
      .get(API_URL + '/names')
      .map(data => {
        return data;
      })
      .catch(this.handleError);
  }

  // API: POST /names
  public createName(name: Name): Observable<Name> {
    // will use this.http.post()
    return this.http
      .post(API_URL + '/names', name)
      .map(data => {
        return data;
      })
      .catch(this.handleError);
  }

  // API: GET /names/:id
  public getNameById(nameId: number): Observable<Name> {
    // will use this.http.get()
    return this.http
      .get(API_URL + '/names' + nameId)
      .map(data => {
        return data;
      })
      .catch(this.handleError);
  }

  // API: PUT /names/:id
  public updateName(name: Name): Observable<Name> {
    // will use this.http.put()
    return this.http
      .put(API_URL + '/names/' + name.id, name)
      .map(data => {
        return data;
      })
      .catch(this.handleError);
  }

  // DELETE /names/:id
  public deleteNameById(nameId: number): Observable<null> {
    // will use this.http.delete()
    return this.http
      .delete(API_URL + '/names' + nameId)
      .map(data => null)
      .catch(this.handleError);
  }

  // API: GET /frequency
  public getAllFrequencies(options: FrequencySearch): Observable<Frequency[]> {
    let params: HttpParams = new HttpParams({});
    if (options.name) {
      params = params.append('name', options.name);
    }
    if (options.genre) {
      params = params.append('genre', options.genre);
    }
    // if (options.search_name) {
    //   params = params.append('search_name', options.search_name);

    return this.http
      .get(API_URL + '/frequency', {params: params})
      .map(data => {
        return data;
      })
      .catch(this.handleError);
  }

  // API: POST /frequency
  public createFrequency(frequency: Frequency): Observable<Frequency> {
    // will use this.http.post()
    return this.http
      .post(API_URL + '/frequency', frequency)
      .map(data => {
        return data;
      })
      .catch(this.handleError);
  }

  // API: GET /frequency/:id
  public getFrequencyById(frequencyId: number): Observable<Frequency> {
    // will use this.http.get()
    return this.http
      .get(API_URL + '/frequency' + frequencyId)
      .map(data => {
        return data;
      })
      .catch(this.handleError);
  }

  // API: PUT /frequency/:id
  public updateFrequency(frequency: Name): Observable<Frequency> {
    // will use this.http.put()
    return this.http
      .put(API_URL + '/frequency/' + frequency.id, frequency)
      .map(data => {
        return data;
      })
      .catch(this.handleError);
  }

  // DELETE /frequency/:id
  public deleteFrequencyById(frequencyId: number): Observable<null> {
    // will use this.http.delete()
    return this.http
      .delete(API_URL + '/names' + frequencyId)
      .map(data => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
