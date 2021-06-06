import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Model/appointment';
import { AppointmentStatus } from 'src/app/Model/approval-status';
import { AppointmentService } from 'src/app/Services/appointment.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {
  appointments!: Appointment[];
  hasAppointments = false;
  appstat!: AppointmentStatus;
  search: any;
  addTest = false;
  getAll = false;
  constructor(private appServ: AppointmentService) {}

  ngOnInit() {
    this.fetchApps();
  }

  fetchApps() {
    if (this.getAll) {
      this.appServ.getAllAppointments().subscribe(
        (data) => {
          this.appointments = data;
          this.hasAppointments = true;
          this.appointments.sort(
            (x, y) =>
              +new Date(y.appointmentdate) - +new Date(x.appointmentdate)
          );
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.appServ.getUpdatableAppointments().subscribe(
        (data) => {
          this.appointments = data;
          this.hasAppointments = true;
          this.appointments.sort(
            (x, y) =>
              +new Date(y.appointmentdate) - +new Date(x.appointmentdate)
          );
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  addTestResult() {
    this.addTest = true;
  }

  checkChange() {
    this.getAll = !this.getAll;
    this.fetchApps();
  }

  check(stat: any) {
    if (stat == 'statusnotapproved') return 1;
    else if (stat == 'cancelled') return 0;
    else return 2;
  }
}