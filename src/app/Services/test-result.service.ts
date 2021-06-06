import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TestResult } from '../Model/test-result';

@Injectable({
  providedIn: 'root'
})
export class TestResultService {
  [x: string]: any;
  private url = 'http://localhost:8083/api/testresult/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getTestResultById(id: number) {
    return this.httpClient
      .get<TestResult>(this.url + 'testresultbyid/' + id.toString())
      .pipe(catchError(this.handleError));
  }

  constructor(private httpClient: HttpClient) {}

  addTestResult(testres: TestResult): Observable<TestResult> {
    return this.httpClient
      .post<TestResult>(
        this.url + 'addtestresult',
        JSON.stringify(testres),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }
  updateTestResult(testres: TestResult): Observable<TestResult> {
    return this.httpClient
      .put<TestResult>(
        this.url + 'updatetestresult',
        JSON.stringify(testres),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }
  getAllTestResult(): Observable<TestResult[]> {
    return this.httpClient
      .get<TestResult[]>(this.url + 'getAlltestresults')
      .pipe(catchError(this.handleError));
  }

  deleteTestResult(testResultid: number): Observable<TestResult[]> {
    return this.httpClient
      .delete<TestResult[]>(
        this.url + 'deletebytestresultid/' + testResultid
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