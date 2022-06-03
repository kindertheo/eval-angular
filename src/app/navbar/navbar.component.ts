import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  auth: AuthService
  constructor(auth: AuthService) {
    this.auth = auth
   }

  ngOnInit(): void {
  }

  isLogged(){
    return this.auth.isLogged()
  }

}
