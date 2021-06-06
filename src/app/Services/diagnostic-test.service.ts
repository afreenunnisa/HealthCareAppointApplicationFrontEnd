import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DiagnosticTest } from '../Model/diagnostic-test';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticTestService {
  private url = 'http://localhost:8083/api/dtest/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}
  getAllTests(): Observable<DiagnosticTest[]> {
    return this.httpClient
      .get<DiagnosticTest[]>(this.url + 'gettests')
      .pipe(catchError(this.handleError));
  }
  addTests(dtest: any): Observable<any> {
    return this.httpClient
      .post<DiagnosticTest>(
        this.url + 'addtest',
        JSON.stringify(dtest),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }
  updateTests(dtest: any): Observable<DiagnosticTest> {
    return this.httpClient
      .put<DiagnosticTest>(
        this.url + 'updatetest',
        JSON.stringify(dtest),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  handleError(eResponse: HttpErrorResponse) {
    if (eResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error =' + eResponse.error.message);
      console.log('Status Code=' + eResponse.status);
    } else {
      console.log('Server Side Error =' + eResponse.error.message);
      console.log('Status Code=' + eResponse.status);
    }
    return throwError(eResponse.error.message);
  }
}