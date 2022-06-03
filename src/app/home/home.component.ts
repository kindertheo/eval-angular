import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authService: AuthService
  router: Router
  loginService: LoginService

  constructor(authService: AuthService, router: Router, loginService: LoginService) {
    this.authService = authService
    this.router = router
    this.loginService = loginService
   }

  ngOnInit(): void {
    if(this.authService.isLogged() ) {
      this.router.navigate(['/user', this.loginService.getCurrentUser() ])
    }
  }
  

}
