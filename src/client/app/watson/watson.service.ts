import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class WatsonService {
  private apiUrl = 'http://localhost:3002/api/speech-to-text/token';

  constructor(private http: HttpClient) {}

  fetchToken(): Observable<string> {
    return this.http
      .get(this.apiUrl, { responseType: 'text' })
      .pipe(map(res => res), catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return Observable.throw(res.error || 'Server error');
  }
}
