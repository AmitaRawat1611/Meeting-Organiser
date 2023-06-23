import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  // @ViewChild('myForm') form!: NgForm;
  form!: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    localStorage.clear();
  }
  constructor(private authService: AuthService) {}
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
  status: boolean = true;
  onSubmit() {
    console.log(this.form.value);
    this.authService.getLoginStatus(this.form.value);
  }
}
