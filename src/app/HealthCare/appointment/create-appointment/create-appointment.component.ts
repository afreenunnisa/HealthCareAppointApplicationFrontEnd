import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DiagnosticCenter } from 'src/app/Model/diagnostic-center';
import { DiagnosticTest } from 'src/app/Model/diagnostic-test';
import { AppointmentService } from 'src/app/Services/appointment.service';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  today = new Date();
  appform!: FormGroup;
  dignosticCenters!: DiagnosticCenter[];
  hasTests = false; 
  success = false;
  errormsg = '';
  validDate = true;
  hasProfile = true;
  patID!: any;
  preDCtests!: DiagnosticTest[];

  constructor(
    private appServ: AppointmentService,
    private formBuild: FormBuilder,
    private patServ: PatientService,

    private routes: Router
  ) {
    this.appform = this.formBuild.group({
      appointmentdate: [null, [Validators.required, this.date()]],
      tests: ['',],
      centers: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.appServ.getAllCenters().subscribe(
      (data) => {
        this.dignosticCenters = data;

      },
      (error) => {
        this.errormsg = error;
      }
    );
   this.patServ.getByUserID().subscribe(
      (data) => {
        if (data == null) {
          this.hasProfile = false;
          this.routes.navigateByUrl('patient');
        } else {
          this.hasProfile = true;
          this.patServ.Patient = data;
          this.patID = data.id;
        }
      },
      (error) => {
        this.hasProfile = false;
      }
    );
  }
  get appointmentdate() {
    return this.appform.get('appointmentdate');
  }

  submitAppointment() {
    alert(this.hasProfile);
    if (this.hasProfile) {
      this.appServ
        .addAppointment(
          this.appform.get('appointmentdate').value,
          'statusnotapproved',
          this.appform.get('centers').value,
          this.appform.get('tests').value,
          this.patID
        )
        .subscribe(
          (data) => {
            this.success = true;
            alert("added in submit")
            alert(data.appointmentdate);
            alert(data.centers.cname);
          },
          (error) => {
            this.errormsg = error;
          }
        );
   } else {
      this.routes.navigateByUrl('patient/update');
    }

  }
selected() {
    let selId = this.appform.get('centers')?.value;
    let DC = this.dignosticCenters.find(
      (dc) => dc.id == selId
    );
    if (DC?.tests != null) {
      if (DC.tests.length > 0) this.hasTests = true;
      else this.hasTests = false;
    } else this.hasTests = false;
    this.preDCtests = DC?.tests!;
}
  date(): ValidatorFn {
    return (control: AbstractControl) =>
      new Date(control.value) >= this.today
        ? null
        : {
            wrongDate:
              'Please Pick A Date from This Day On ' + this.today.toString(),
          };
  }
}
