import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminGuard } from './Guard/admin.guard';
import { UserGuard } from './Guard/user.guard';
import { AppointmentComponent } from './HealthCare/appointment/appointment.component';
import { CreateAppointmentComponent } from './HealthCare/appointment/create-appointment/create-appointment.component';
import { UAppFormComponent } from './HealthCare/appointment/update-appointment/u-app-form/u-app-form.component';
import { UpdateAppointmentComponent } from './HealthCare/appointment/update-appointment/update-appointment.component';
import { UpdateEachComponent } from './HealthCare/appointment/update-appointment/update-each/update-each.component';
import { VerifyAppointmentComponent } from './HealthCare/appointment/verify-appointment/verify-appointment.component';
import { ViewAppointmentComponent } from './HealthCare/appointment/view-appointment/view-appointment.component';
import { AddcenterComponent } from './HealthCare/diagnostic-center/addcenter/addcenter.component';
import { AddtesttocenterComponent } from './HealthCare/diagnostic-center/addtesttocenter/addtesttocenter.component';
import { CenterhomeComponent } from './HealthCare/diagnostic-center/centerhome/centerhome.component';
import { DiagnosticCenterComponent } from './HealthCare/diagnostic-center/diagnostic-center.component';
import { GetallcentersComponent } from './HealthCare/diagnostic-center/getallcenters/getallcenters.component';
import { TestdetailsComponent } from './HealthCare/diagnostic-center/testdetails/testdetails.component';
import { UpdatecenterComponent } from './HealthCare/diagnostic-center/updatecenter/updatecenter.component';
import { AddDiagnosticTestComponent } from './HealthCare/diagnostic-test/add-diagnostic-test/add-diagnostic-test.component';
import { AllTestComponent } from './HealthCare/diagnostic-test/all-test/all-test.component';
import { DiagnosticTestComponent } from './HealthCare/diagnostic-test/diagnostic-test.component';
import { HomeComponent } from './HealthCare/home/home.component';
import { LoginComponent } from './HealthCare/login/login.component';
import { NopageComponent } from './HealthCare/nopage/nopage.component';
import { PatientComponent } from './HealthCare/patient/patient.component';
import { UpdateComponent } from './HealthCare/patient/update/update.component';
import { AllTestresultComponent } from './HealthCare/test-result/all-testresult/all-testresult.component';
import { CreateTestResultComponent } from './HealthCare/test-result/create-test-result/create-test-result.component';
import { TestResultComponent } from './HealthCare/test-result/test-result.component';
import { UpdatetestresultComponent } from './HealthCare/test-result/updatetestresult/updatetestresult.component';
import { UserRegistrationComponent } from './HealthCare/user/user-registration/user-registration.component';
import { UserComponent } from './HealthCare/user/user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'patient',
    component: PatientComponent,
    canActivate: [UserGuard],
    children: [
   { path: 'update', component: UpdateComponent ,
   canActivate: [UserGuard],
    }
  ]
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'appointment',
    component: AppointmentComponent,
    children: [
      {
        path: 'createappointment',
        component: CreateAppointmentComponent,
        canActivate: [UserGuard],
      },
      {
        path: 'viewappointment',
        component: ViewAppointmentComponent,
        canActivate: [UserGuard],
      },
      {
        path: 'verifyappointment',
        component: VerifyAppointmentComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'updateappointments',
        component: UpdateAppointmentComponent,
        canActivate: [AdminGuard],
      },
    ],
  },
  {
    path: 'testresult',
    component: TestResultComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'addTestResult',
        component: CreateTestResultComponent,
      },
      {
        path: 'all',
        component: AllTestresultComponent,
      },
      {
        path: 'updateresult/:testResultid',
        component: UpdatetestresultComponent,
      },
    ],
  },

  {
    path: 'diagnosticCenter',
    redirectTo: 'diagnosticCenter/centerhome',
    pathMatch: 'full',
  },
  {
    path: 'diagnosticCenter',
    component: DiagnosticCenterComponent,
    children: [
      { path: 'all', component: GetallcentersComponent,
        canActivate:[UserGuard] 
      },
      { path: 'centerhome', component: CenterhomeComponent ,
      canActivate: [AdminGuard],
      },
      { path: 'add', component: AddcenterComponent,
      canActivate: [AdminGuard], },
      { path: 'update/:diagonasticCenterid', component: UpdatecenterComponent,
      canActivate: [AdminGuard],
      },
      {
        path: 'testDetails/:diagonasticCenterid',
        component: TestdetailsComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'addTest/:diagonasticCenterid',
        component: AddtesttocenterComponent,
        canActivate: [AdminGuard],
      },

    ],
  },
  {
    path: 'diagnostictest',
    component: DiagnosticTestComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'all', component: AllTestComponent },
      { path: 'add', component: AddDiagnosticTestComponent },
      { path: 'update/:diagnosticTestid', component: UpdateComponent },
      // { path: 'details/:id', component: TestDetailsComponent}
    ],
  },
  {
    path: '**',
    component: NopageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  LoginComponent,
  AppComponent,
  HomeComponent,
  NopageComponent,
  TestResultComponent,
  CreateTestResultComponent,
  PatientComponent,
  AppointmentComponent,
  CreateAppointmentComponent,
  ViewAppointmentComponent,
  VerifyAppointmentComponent,
  UpdateAppointmentComponent,
  UAppFormComponent,
  UpdateEachComponent,
  UpdateComponent,
  DiagnosticCenterComponent,
  CenterhomeComponent,
  GetallcentersComponent,
  AddcenterComponent,
  UpdatecenterComponent,
  TestdetailsComponent,
  AddtesttocenterComponent,
  DiagnosticTestComponent,
  AllTestComponent,
  UpdateComponent,
  TestResultComponent,
  AllTestresultComponent,
  UpdatetestresultComponent,
  //UpdatePatientComponent,
  AllTestComponent,
  UserComponent,
  UserRegistrationComponent,
];


