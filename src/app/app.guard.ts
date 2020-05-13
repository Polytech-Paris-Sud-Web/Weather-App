import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { AuthenticationService } from './services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.auth.isAuth().pipe(map(
      auth => {
        if (auth) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }
    ));
  }

}
