import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'app/views/loginpage.html',
})
export class LoginComponent {
  loading = false;
  error = '';

  constructor(public authService: AuthService, private router: Router) { }

  onLogin() {
    this.authService.login().subscribe(result => {
      if (result === true) {
        this.router.navigate(['/home']);
      } else {
        this.error = 'Username or password is incorrect';
        this.loading = false;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
