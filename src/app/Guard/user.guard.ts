import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { LoginService } from '../Services/login.service';


@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(private logServ: LoginService, private routes: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.logServ.Status) this.routes.navigateByUrl('login');
    return this.logServ.Status == true && this.logServ.Role == 'user';
  }
}