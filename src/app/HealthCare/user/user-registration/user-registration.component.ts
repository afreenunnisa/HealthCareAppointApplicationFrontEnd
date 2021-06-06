import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Model/user';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  @Input('user') user!: User;
  @Output('changeEvent') changeEvent: EventEmitter<User> = new EventEmitter();
  userForm!: FormGroup;
  constructor(
    private formBuild: FormBuilder,
    private userServ: UserService,
    private logServ: LoginService
  ) {}

  ngOnInit() {
    this.userForm = this.formBuild.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: [this.Role, Validators.required],
    });
    if (this.user != null) {
      this.userForm.setValue({
        username: this.user.username,
        password: this.user.password,
        role: this.user.role,
      });
    }
  }
  get Role() {
    return this.logServ.Role;
  }

  submit() {
    if (this.user == null) {
      //update
      if (this.Role == 'ADMIN' && this.userForm.get('role')?.value == 'ADMIN') {
        //reg admin call
        let userU = new User();
        userU.username = this.userForm.get('username')?.value;
        userU.password = this.userForm.get('password')?.value;
        userU.role = this.userForm.get('role')?.value;
        this.userServ.registerAdmin(userU).subscribe(
          (data) => {
            this.changeEvent.emit(data);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        let userU = new User();
        userU.username = this.userForm.get('username')?.value;
        userU.password = this.userForm.get('password')?.value;
        userU.role = this.userForm.get('role')?.value;
        this.userServ.registerUser(userU).subscribe(
          (data) => {
            
            this.changeEvent.emit(data);
          },
          (error) => {
            console.log(error);
          }
        );
      }
    } else {
      let userU = new User();
      userU.username = this.userForm.get('username')?.value;
      userU.password = this.userForm.get('password')?.value;
      userU.role = this.userForm.get('role')?.value;
      userU.id = this.user.id;
      this.userServ.updateUser(userU).subscribe(
        (data) => {
          this.changeEvent.emit(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}