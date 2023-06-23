import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  token: any;

  getLoginStatus(data: object) {
    this.http
      .post('http://192.168.0.192:9090/login', JSON.stringify(data))
      .subscribe((result: any) => {
        console.log(result['role']);
        console.log(result['token'], 'RESULT');
        localStorage.setItem('role', result['role']);
        localStorage.setItem('token', result['token']);
        if (localStorage.getItem('token')) {
          this.token = localStorage.getItem('token');
        }
      });
  }

  getToken() {
    return localStorage.getItem('token');
  }
  // getAuthStatus() {
  //   if (!!localStorage.getItem('token')) {
  //     console.log(true);
  //     return true;
  //   } else {
  //     console.log(false);
  //     return false;
  //   }
  // }
}
