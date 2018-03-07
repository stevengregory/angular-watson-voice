import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class WatsonService {
  private apiUrl = 'http://localhost:3002/api/speech-to-text/token';

  constructor(private http: Http) {}

  fetchToken(): Observable<any> {
    return this.http
      .get(this.apiUrl)
      .pipe(map(response => response.text()), catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return Observable.throw(res.error || 'Server error');
  }
}
