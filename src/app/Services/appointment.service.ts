import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { Appointment } from '../Model/appointment';
import { DiagnosticCenter } from '../Model/diagnostic-center';
import { TestResult } from '../Model/test-result';
import { PatientService } from './patient.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(private http: HttpClient, private patServ: PatientService) {}

  addAppointment(
    appointmentdate: Date,
    approvalStatus: string,
    centerID: string,
    testId: string[],
    patientid: number
  ): Observable<Appointment> {
    let postParams = new HttpParams({
      fromObject: {
        patientID: patientid.toString(),
        diagnosticCenterID: centerID,
        testIds: testId,
      },
    });
    return this.http
      .post<Appointment>(
        'http://localhost:8083/api/appointment/addappointment',
        {
          appointmentdate: appointmentdate,
          approvalStatus: approvalStatus,
        },
        {
          params: postParams,
        }
      )
      .pipe(catchError(this.handleError), shareReplay());
  }

  getAllAppointments() {
    return this.http
      .get<Appointment[]>('http://localhost:8083/api/appointment/getAll')
      .pipe(catchError(this.handleError), shareReplay());
  }

  getUpdatableAppointments() {
    return this.http
      .get<Appointment[]>(
        'http://localhost:8083/api/appointment/updateappointment/update'
      )
      .pipe(catchError(this.handleError), shareReplay());
  }

  addTestResult(appointmentId: number, testResId: number) {
    return this.http
      .put<TestResult>(
        'http://localhost:8083/api/appointment/addTestResult' +
          appointmentId +
          '/' +
          testResId,
        null
      )
      .pipe(catchError(this.handleError), shareReplay());
  }

  verifyAppointment(app: Appointment) {
    return this.http
      .put<Appointment>('http://localhost:8083/api/appointment/verify', app)
      .pipe(catchError(this.handleError), shareReplay());
  }

  rejectAppointment(app: Appointment) {
    return this.http
      .put<Appointment>('http://localhost:8083/api/appointment/reject', app)
      .pipe(catchError(this.handleError), shareReplay());
  }
  getVerifiableAppointments() {
    return this.http
      .get<Appointment[]>('http://localhost:8083/api/appointment/getVerifiable')
      .pipe(catchError(this.handleError), shareReplay());
  }

  getAppointments(id: number): Observable<Appointment[]> {
    return this.http
      .get<Appointment[]>(
        'http://localhost:8083/api/appointment/viewappointments/' + id
      )
      .pipe(catchError(this.handleError), shareReplay());
  }

  getAllCenters(): Observable<DiagnosticCenter[]> {
    return this.http
      .get<DiagnosticCenter[]>(
        'http://localhost:8083/api/dcenter/getAllcenters'
      )
      .pipe(catchError(this.handleError), shareReplay());
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      return throwError('Unable to Connect to the Server Please Try Again');
    }
    return throwError(error.message);
  }
}