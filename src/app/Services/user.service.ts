import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get<User[]>('http://localhost:8888/user/getAll')
      .pipe(catchError(this.handleError), shareReplay());
  }

  updateUser(user: User) {
    return this.http
      .put<User>('http://localhost:8888/user/updateUser', {
        username: user.username,
        password: user.password,
        userid: user.id,
        role: user.role,
      })
      .pipe(catchError(this.handleError), shareReplay());
  }

  registerAdmin(user: User) {
    return this.http
      .post<User>('http://localhost:8888/admin/registeradmin', {
        username: user.username,
        password: user.password,
        role: 'ADMIN',
      })
      .pipe(catchError(this.handleError), shareReplay());
  }
  registerUser(user: User) {
    return this.http
      .post<User>('http://localhost:8888/user/adduser', {
        username: user.username,
        password: user.password,
        role: 'user',
      })
      .pipe(catchError(this.handleError), shareReplay());
  }

  deleteUser(id: number) {
    return this.http
      .delete<User>('http://localhost:8888/admin/deleteAdmin/' + id)
      .pipe(catchError(this.handleError), shareReplay());
  }
  handleError(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}