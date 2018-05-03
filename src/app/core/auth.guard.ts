import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';

import { map, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}

  canActivate(route: ActivatedRouteSnapshot):Observable<boolean>{
    return this.afAuth.authState.map((user)=>{
      if (user != null) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }).take(1);
  }
}
