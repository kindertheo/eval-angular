import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import jwt_decode from "jwt-decode"
import * as moment from 'moment';
import { LoginInterface, AuthInterface, JWTInterface } from '../interface/authInterface';
import { AuthService } from '../service/auth.service';
import { User } from '../interface/userInterface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() email: string
  @Input() password: string
  authService: AuthService

  constructor(private LoginService: LoginService, private route: Router, authService: AuthService) {
    this.email = '';
    this.password = '';
    this.authService = authService;
   }

  ngOnInit(): void {
  }

  submitLoginForm(): void{
    console.log(this.email, this.password)
    
    const user: LoginInterface = {
      email: this.email,
      password: this.password
    }
    // 3000@gmail.com
    // password
   const that = this
   this.LoginService.login(user).subscribe({
     next(ret: any) {
       const auth = <AuthInterface>ret
       let id = that.setSession(auth.token)
       if (id){
         console.log("successfully logged in")
         that.route.navigate(["/user", id])
       }
     },
     error(err: any){
       alert(err)
       console.log(err)
     }
   })
  }

  decodeJWTToken(token?: string | null | undefined ): JWTInterface | false{
    if (token === undefined || token === null){
      token = this.getToken()
    }
    console.log(token)
    if(token){
      try{
        const jwt_token = <JWTInterface>jwt_decode(token)
        console.log("super token in decode" , token)
        this.setTokenInLocalStorage(token, jwt_token)
        return jwt_token
      } catch(error) {
        console.log("error",error)
        return false
      }
    }
    return false

  }

  private getToken(){
    return localStorage.getItem('id_token')
  }

  private setTokenInLocalStorage(token: string, jwt_token: JWTInterface){
    localStorage.clear()
    if (jwt_token){
      const expiresAt = new Date(jwt_token.exp * 1000);
      console.log("SET TOKEN 2 : ", token.toString())
      localStorage.setItem('expire_date', moment.parseZone(expiresAt).toString())
      localStorage.setItem('id_token', token );
      localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );
    }
  }

  private setSession(token_id: string): number | void {
      const token = this.decodeJWTToken(token_id)
      console.log("token", token)
      if (token !== false) {
        localStorage.clear()
        const expiresAt = new Date(token.exp * 1000);
        console.log(expiresAt)
        localStorage.setItem('expire_date', moment.parseZone(expiresAt).toString())
        localStorage.setItem('id_token', token_id);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) );

        this.LoginService.setCurrentUser(token.id)
        return token.id
      }
    }

  getCurrentUser(): User | null{
    const token = this.decodeJWTToken()
    if(token){
      const current_user = this.authService.httpGetRequest('user/' + token.id)
      return <User>current_user
    }
    return null
  }

  getCurrentUserId(): number | null{
    let user =  this.getCurrentUser()
    if (user){
      return user.id
    }
    return null
  }

  isUserOwner(id: number): boolean{
    if (localStorage.getItem('user_id')) {
      return id.toString() == localStorage.getItem('user_id')
    }
    return false
  }

}
