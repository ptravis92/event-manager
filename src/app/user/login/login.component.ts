import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  mouseoverLogin: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  login(formValues) {
    this.authService.loginUser(formValues.userName, 
      formValues.password);
      this.cancel();
  }
  cancel() {
    this.router.navigate(['events']);
  }

  ngOnInit() {
  }

}
