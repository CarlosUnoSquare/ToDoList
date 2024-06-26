import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.loginService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
};
