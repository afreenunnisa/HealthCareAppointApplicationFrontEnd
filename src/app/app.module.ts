import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddDiagnosticTestComponent } from "./HealthCare/diagnostic-test/add-diagnostic-test/add-diagnostic-test.component";
import { AppointmentService } from "./Services/appointment.service";
import { DiagnosticCenterService } from "./Services/diagnostic-center.service";
import { DiagnosticTestService } from "./Services/diagnostic-test.service";
import { LoginService } from "./Services/login.service";
import { PatientService } from "./Services/patient.service";
import { TestResultService } from "./Services/test-result.service";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LogoutComponent } from './HealthCare/logout/logout.component';
@NgModule({
  declarations: [
    [routingComponents, AddDiagnosticTestComponent
  ]
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [
    LoginService,
    PatientService,
    DiagnosticCenterService,
    AppointmentService,
    DiagnosticTestService,
    TestResultService,
  ],
  bootstrap: [AppComponent],
  exports: [routingComponents]
})
export class AppModule { }
