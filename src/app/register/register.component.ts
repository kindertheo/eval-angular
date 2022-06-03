import { Component, Input, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/service/register.service';
import { RegisterInterface } from '../interface/authInterface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() username: string
  @Input() password: string
  @Input() email: string
  @Input() avatar: string

  constructor(private registerService: RegisterService) {
    this.username = '';
    this.password = '';
    this.avatar = '';
    this.email = '';
  }

  ngOnInit(): void {
  }

  submitRegisterForm(): void {
    const user: RegisterInterface =
      {
        pseudo: this.username,
        password: this.password,
        email: this.email,
        avatar: this.avatar
      }
    

    this.registerService.register(user)

  }

}
