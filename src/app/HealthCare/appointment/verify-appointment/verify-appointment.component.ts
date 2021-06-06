import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Model/appointment';
import { AppointmentStatus } from 'src/app/Model/approval-status';
import { AppointmentService } from 'src/app/Services/appointment.service';

@Component({
  selector: 'app-verify-appointment',
  templateUrl: './verify-appointment.component.html',
  styleUrls: ['./verify-appointment.component.css']
})
export class VerifyAppointmentComponent implements OnInit {

  appointments!: Appointment[];
  hasAppointments = false;
  appstat!: AppointmentStatus;
  search: any;
  constructor(private appServ: AppointmentService) {}

  ngOnInit() {
    this.fetchApps();
  }

  fetchApps() {
    this.appServ.getVerifiableAppointments().subscribe(
      (data) => {
        this.appointments = data;
        this.hasAppointments = true;
        this.appointments.sort(
          (x, y) => +new Date(y.appointmentdate) - +new Date(x.appointmentdate)
        );
        if (this.appointments.length == 0) this.hasAppointments = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  verify(app: Appointment) {
    this.appServ.verifyAppointment(app).subscribe(
      (data) => {
        this.fetchApps();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  reject(app: Appointment) {
    this.appServ.rejectAppointment(app).subscribe(
      (data) => {
        this.fetchApps();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}