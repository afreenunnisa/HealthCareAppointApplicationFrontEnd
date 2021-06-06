import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formgrp!: FormGroup;
  errormsg: string = '';
  constructor(
    private log: LoginService,
    private routes: Router,
    private form: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formgrp = this.form.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    let username = this.formgrp.get('username')?.value;
    let pass = this.formgrp.get('password')?.value;
    if (username != null ) {
      this.log.login(username, pass)?.subscribe(
        (data) => {
          this.log.User = data;
          alert(data["role"]);
          let role=data.role;
          alert(data.password);
          alert("user "+this.log.user.password);
            sessionStorage.setItem("role",role);
            this.log.Status = true;
            if (role == 'user') {
             //this.routes.navigate(['patient/update']);
             //this.routes.navigate(['home']);
             this.routes.navigate(['appointment/createappointment']);
            } else {
              this.routes.navigate(['appointment/verifyappointment']);
            }
          
        },
        (error) => {
          this.errormsg = error;
          this.log.Status = false;
        }
      );
    }
  }

  logout() {
   // sessionStorage.removeItem("role");
    this.log.logout();
  }
}
 