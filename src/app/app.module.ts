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
  //reference to the components is stored
  declarations: [
    [routingComponents, AddDiagnosticTestComponent
  ]
  ],
  //it contains module imports
  imports: [
    BrowserModule,////provides services that are essential to launch and run a browser app.
    AppRoutingModule,////to configure routes
    HttpClientModule,//allows us to perform http requests and easily manipulate those requests and responses
    ReactiveFormsModule,//Exports the required infrastructure and directives for reactive forms, making them available for import by NgModules that import this module.
    FormsModule,////Exports the required providers and directives for template-driven forms
    Ng2SearchPipeModule// helps us create a custom search
  ],
  //includes the custom services 
  providers: [
    LoginService,
    PatientService,
    DiagnosticCenterService,
    AppointmentService,
    DiagnosticTestService,
    TestResultService,
  ],
 //This will have reference to the default component created
  bootstrap: [AppComponent],
  exports: [routingComponents]
})
export class AppModule { }
