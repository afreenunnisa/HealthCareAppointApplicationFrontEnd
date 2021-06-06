import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { Patient } from '../Model/patient';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService implements OnInit{

  id!: number;
  patient!: Patient;
  constructor(private http: HttpClient, private log: LoginService) {}
  ngOnInit(): void {
    this.getByUserID();
  }

  set Patient(pat: Patient) {
    this.patient = pat;
  }
  get Patient() {
    return this.patient;
  }

  getByUserID() {
    return this.http
      .get<Patient>(
        'http://localhost:8083/api/patient/viewpatient/' + this.log.id
      )
      .pipe(catchError(this.handleError), shareReplay());
  }

  updatePatient(
    id: number,
    name: string,
    gender: string,
    phoneno: string,
    age: number
  ) {
    return this.http
      .put<Patient>('http://localhost:8083/api/patient/updatepatient', {
        id: id,
        name: name,
        gender: gender,
        phoneno: phoneno,
        age: age,
      })
      .pipe(catchError(this.handleError));
  }
  registerPatient(name: string, gender: string, phoneno: string, age: number) {
    if (this.log.id != null) {
      return this.http
        .post<Patient>(
          'http://localhost:8083/api/patient/registerpatient/' + this.log.id,
          {
            name: name,
            gender: gender,
            phoneno: phoneno,
            age: age,
          }
        )
        .pipe(catchError(this.handleError));
  }
  else{
  return null;
  }
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