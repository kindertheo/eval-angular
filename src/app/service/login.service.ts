import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { AuthInterface, JWTInterface, LoginInterface } from '../interface/authInterface';
import { catchError, from, throwError } from 'rxjs';
import jwt_decode from "jwt-decode"
import { AuthService } from './auth.service';
import { User } from '../interface/userInterface';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "https://reseau.jdedev.fr/api/user/connect"
  returnApi: any
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  authService: AuthService

  constructor(private http: HttpClient, private auth: AuthService) {
    this.authService = auth
   }

  login(login: LoginInterface): AuthInterface | any{
    console.log("requete login")
    return this.http.post<any>(this.url, login, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  getObsFromFetch(){
    return from(fetch(this.url)).pipe(
    catchError(this.handleError))
  }
      

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
    } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
    `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(error.error.mess || error.error);
    }
    

    decodeJWTToken(): JWTInterface | false{
      let token = this.getToken()
      if(token){
        try{
          return <JWTInterface>jwt_decode(token)
        } catch(error) {
          console.log(error)
          return false
        }
      }
      return false
    }

    getToken(){
      return localStorage.getItem('id_token')
    }

    setCurrentUser(id: number | string){
      localStorage.setItem('user_id', id.toString())
    }

    getCurrentUserFromApi(): User | null{
      const that = this
      const token = this.decodeJWTToken()
      if(token){
        const current_user = this.authService.httpGetRequest('user/' + token.id).subscribe({
          next(ret: any) {
            console.log("return ", ret)
            let user = <User>ret
            that.setCurrentUser(user.id)
            return user
          },
          error(err: any){
            console.log("Error ",err)
          }
        })
        console.log(current_user)
      }
      return null
    }

    getCurrentUser(){
      return localStorage.getItem('user_id')
    }
  
    getCurrentUserId(): string | null{
      let user_id =  this.getCurrentUser()
      console.log(user_id)
      if (user_id){
        return user_id
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
