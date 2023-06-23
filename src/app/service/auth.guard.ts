import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (
      this.authService.token &&
      this.authService.token !== 'undefined' &&
      this.authService.token !== ' '
    ) {
      // console.log(this.authService.token);
      // this.router.navigate(['/main']);
      return true;
    }
    return false;
  }
}
