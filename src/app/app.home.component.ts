import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { LoginModel } from './models/loginModel';
import {LoginComponent} from './app.login.component'

@Component({
  templateUrl: 'app/views/homepage.html',
})
export class HomeComponent implements OnInit {
  userId: string;
  isLoggedIn: boolean;
  loginModel: LoginModel;

  constructor(public authService: AuthService, private loginComponent: LoginComponent) {
    this.getLoginModelFromLocalStorageIfLogedIn();
  }

  ngOnInit() {
    if (this.isLoggedIn) {
      this.userId = this.loginModel.name;
    } else {
      this.userId = 'Not Authorized Request';
    }
  }

  getLoginModelFromLocalStorageIfLogedIn() {
    if (localStorage.getItem('currentUser')) {
      this.isLoggedIn = true;
      this.loginModel = JSON.parse(localStorage.getItem('currentUser'));
      return this.isLoggedIn;
    }
  }

  logout() {
    this.loginComponent.logout();
  }
}
