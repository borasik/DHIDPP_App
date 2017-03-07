import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (!localStorage.getItem('currentUser')) {
            if (url !== '/') {
                this.router.navigate(['']);
            } else {
                return true;
            }
            return false;
        } else {
            if (url !== '/home' && this.router.url !== '/home') {
                this.router.navigate(['/home']);
            } else {
                return true;
            }
        }
    }
}