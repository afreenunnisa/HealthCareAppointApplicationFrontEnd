import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router'; 
import { Patient } from 'src/app/Model/patient';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  @Output('patient') patient: Patient;
  update = false;
  constructor(private patServ: PatientService, private routes: Router) {}
  ngOnInit() {
    this.getPatient();
  }

  getPatient() {
    this.patServ.getByUserID()?.subscribe(
      (data) => {
        this.patient = data;
        if (this.patient == null) {
          this.update = true;
        } else {
          this.patServ.Patient = this.patient;
          this.patServ.id = this.patient.id;
        }
      },
      (error) => console.log(error)
    );
  }

  updateDetails() {
    this.update = !this.update;
  }

  childUpdate(data: any) {
    this.patient = data;
    this.update = false;
  }
}
