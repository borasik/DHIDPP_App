import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Http, Response } from '@angular/http';


@Injectable()
export class AuthService {
  constructor(private http: Http) {

  }

  login() {
    return this.http.get('http://localhost:8081/login')
      .map((response: Response) => {
        let resultObj = response.json();
        if (!resultObj.redirect) {
          let token = response.json() && response.json().loginResposne.token;
          if (token) {
            localStorage.setItem('currentUser', JSON.stringify(response.json().loginResposne));
            return true;
          }
        } else {
          console.log('redirecting to: ' + response.json().redirectUrl);
          window.location.replace(response.json().redirectUrl);
        }

        return false;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
