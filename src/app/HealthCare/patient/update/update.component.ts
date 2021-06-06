import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Model/patient';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-Update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Input('patient') patient!: Patient;
  newPatient = false;
  patientForm!: FormGroup;
  @Output('updatedEvent')
  updatedEvent: EventEmitter<Patient> = new EventEmitter();
  constructor(
    private formBuild: FormBuilder,
    private patServ: PatientService,
    private routes: Router
  ) {
    this.patientForm = this.formBuild.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      phoneno: ['', Validators.required],
      age: ['', Validators.required],
    });
  }
  ngOnInit() {
    if (this.patient != null) {
      this.patientForm.setValue({
        name: this.patient.name,
        gender: this.patient.gender,
        phoneno: this.patient.phoneno,
        age: this.patient.age,
      });
    } else {
      this.newPatient = true;
    }
  }

  saveDetails() {
    if (!this.newPatient) {
      this.patServ
        .updatePatient(
          this.patient.id,
          this.patientForm.get('name')?.value,
          this.patientForm.get('gender')?.value,
          this.patientForm.get('phoneno')?.value,
          this.patientForm.get('age')?.value
        )
        ?.subscribe(
          (data) => {
            this.updatedEvent.emit(data);
            alert("update p");
            this.routes.navigate(['appointment/createappointment']);
          },
          (error) => {
            console.log(error);
          }
        );
    }else {
      this.patServ
        .registerPatient(
          this.patientForm.get('name')?.value,
          this.patientForm.get('gender')?.value,
          this.patientForm.get('phoneno')?.value,
          this.patientForm.get('age')?.value
        )
        ?.subscribe(
          (data) => {
            this.updatedEvent.emit(data);
            alert("register p");
            this.routes.navigate(['appointment/createappointment']);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
}