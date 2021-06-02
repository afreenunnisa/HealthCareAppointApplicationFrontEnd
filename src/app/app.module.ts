import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './HealthCare/appointment/appointment.component';
import { DiagnosticCenterComponent } from './HealthCare/diagnostic-center/diagnostic-center.component';
import { DiagnosticTestComponent } from './HealthCare/diagnostic-test/diagnostic-test.component';
import { HomeComponent } from './HealthCare/home/home.component';
import { LoginComponent } from './HealthCare/login/login.component';
import { NopageComponent } from './HealthCare/nopage/nopage.component';
import { PatientComponent } from './HealthCare/patient/patient.component';
import { TestResultComponent } from './HealthCare/test-result/test-result.component';
import { UserComponent } from './HealthCare/user/user.component';
import { LoginService } from './Services/login.service';

import { ViewAppointmentComponent } from './HealthCare/appointment/view-appointment/view-appointment.component';
import { VerifyAppointmentComponent } from './HealthCare/appointment/verify-appointment/verify-appointment.component';
import { UpdateAppointmentComponent } from './HealthCare/appointment/update-appointment/update-appointment.component';

import { CenterhomeComponent } from './HealthCare/diagnostic-center/centerhome/centerhome.component';
import { AddcenterComponent } from './HealthCare/diagnostic-center/addcenter/addcenter.component';
import { UpdatecenterComponent } from './HealthCare/diagnostic-center/updatecenter/updatecenter.component';
import { TestdetailsComponent } from './HealthCare/diagnostic-center/testdetails/testdetails.component';
import { AddtesttocenterComponent } from './HealthCare/diagnostic-center/addtesttocenter/addtesttocenter.component';
import { CreateTestResultComponent } from './HealthCare/test-result/create-test-result/create-test-result.component';
import { AllTestresultComponent } from './HealthCare/test-result/all-testresult/all-testresult.component';
import { UpdatetestresultComponent } from './HealthCare/test-result/updatetestresult/updatetestresult.component';
import { AllTestComponent } from './HealthCare/diagnostic-test/all-test/all-test.component';
import { AddDiagnosticTestComponent } from './HealthCare/diagnostic-test/add-diagnostic-test/add-diagnostic-test.component';
import { UpdateTestComponent } from './HealthCare/diagnostic-test/update-test/update-test.component';
import { UpdateComponent } from './HealthCare/patient/update/update.component';
import { UAppFormComponent } from './HealthCare/appointment/update-appointment/u-app-form/u-app-form.component';
import { UpdateEachComponent } from './HealthCare/appointment/update-appointment/update-each/update-each.component';
import { UserRegistrationComponent } from './HealthCare/user/user-registration/user-registration.component';
import { CreateAppointmentComponent } from './HealthCare/appointment/create-appointment/create-appointment.component';
import { GetallcentersComponent } from './HealthCare/diagnostic-center/getallcenters/getallcenters.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PatientComponent,
    AppointmentComponent,
    DiagnosticCenterComponent,
    DiagnosticTestComponent,
    TestResultComponent,
    HomeComponent,
    LoginComponent,
    NopageComponent,
    CreateAppointmentComponent,
    ViewAppointmentComponent,
    VerifyAppointmentComponent,
    UpdateAppointmentComponent,
    GetallcentersComponent,
    CenterhomeComponent,
    AddcenterComponent,
    UpdatecenterComponent,
    TestdetailsComponent,
    AddtesttocenterComponent,
    CreateTestResultComponent,
    AllTestresultComponent,
    UpdatetestresultComponent,
    AllTestComponent,
    AddDiagnosticTestComponent,
    UpdateTestComponent,
    UpdateComponent,
    UAppFormComponent,
    UpdateEachComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
