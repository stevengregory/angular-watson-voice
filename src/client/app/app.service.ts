import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AppService {
  private apiUrl = 'http://localhost:3002/api/speech-to-text/token';

  constructor(private http: Http) {}

  fetchToken(): Observable<any> {
    return this.http
      .get(this.apiUrl)
      .map(response => response.text())
      .catch((error: any) => {
        console.error('Watson API issue fetching token', error);
        return Observable.throw(error.message || error);
      });
  }
}
