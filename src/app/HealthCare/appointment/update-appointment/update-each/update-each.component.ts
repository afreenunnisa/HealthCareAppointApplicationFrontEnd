import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Model/appointment';
import { AppointmentStatus } from 'src/app/Model/approval-status';
import { TestResult } from 'src/app/Model/test-result';
import { AppointmentService } from 'src/app/Services/appointment.service';

@Component({
  selector: 'app-UpdateEach',
  templateUrl: './update-each.component.html',
  styleUrls: ['./update-each.component.css']
})
export class UpdateEachComponent implements OnInit {
  @Input('appointment') appointment!: Appointment;
  hasAppointments = false;
  appstat!: AppointmentStatus;
  search: any;
  addTest = false;
  constructor(private appServ: AppointmentService) {}

  ngOnInit() {}

  addTestResult() {
    this.addTest = !this.addTest;
  }

  testResAdded(event: TestResult) {
    this.appServ
      .addTestResult(this.appointment.id, event.id)
      .subscribe(
        (data) => {
          this.appointment.testResults.push(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}