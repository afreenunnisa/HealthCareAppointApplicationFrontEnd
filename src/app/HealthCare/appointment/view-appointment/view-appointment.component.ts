import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/Model/appointment';
import { AppointmentStatus } from 'src/app/Model/approval-status';
import { AppointmentService } from 'src/app/Services/appointment.service';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  appointments!: Appointment[];
  hasAppointments!: boolean;
  appstat!: AppointmentStatus;
  constructor(
    private appServ: AppointmentService,
    private patServ: PatientService,
    private routes: Router
  ) {}

  ngOnInit() {
    this.fetchApps();
  }

  fetchApps() {
    this.patServ.getByUserID().subscribe(
      (data) => {
        if (data != null) {
          this.appointments = data.appointments;
          if (this.appointments != null && this.appointments.length != 0) {
            this.hasAppointments = true;
            this.appointments.sort(
              (x, y) =>
                +new Date(y.appointmentdate) - +new Date(x.appointmentdate)
            );
          }
        } else {
          this.routes.navigateByUrl('patient');
        }
      },
      (error) => {
        this.hasAppointments = false;
        console.log(error);
      }
    );
  }

  check(stat: any) {
    if (stat == 'statusnotapproved') return 1;
    else if (stat == 'cancelled') return 0;
    else return 2;
  }

  statusPipe(stat: any) {
    if (stat == 'statusnotapproved') return 'Status Not Yet Approved';
    else return stat;
  }
}