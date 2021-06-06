import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
   providedIn: 'root'
})
export class AuthService {
   pattern1="[A-Za-Z0-9]{3}";

   isUserLoggedIn: boolean = false;

   login(userName: string, password: string): Observable<boolean> {
      console.log(userName);
      console.log(password);
      this.isUserLoggedIn = userName == this.pattern1 && password == this.pattern1;
      localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 

   return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => { 
         console.log("Is User Authentication is successful: " + val); 
      })
   );
   }

   logout(): void {
   this.isUserLoggedIn = false;
      localStorage.removeItem('isUserLoggedIn'); 
   }

   constructor() { }
}