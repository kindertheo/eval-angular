import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : this.getAuthToken()
    })
  }

  baseUrl = 'https://reseau.jdedev.fr/api/'
  constructor(private http: HttpClient, private route: Router) { }

  getAuthToken(){
    return "Bearer " + localStorage.getItem("id_token")
  }

  verifyDate(){
    const exp_date: string | null = localStorage.getItem('expires_date')
    if (exp_date && new Date(exp_date) < new Date()){
      alert('Non connecté !')
      localStorage.removeItem('expires_date')
      localStorage.removeItem('id_token')
      localStorage.removeItem('expires_at')
      this.route.navigate(['/login'])
    }
  }

  isLogged(){
    const exp_date: string | null = localStorage.getItem('expire_date')
    const token: string | null = localStorage.getItem('id_token')
    console.log(token)
    if( exp_date && token){
      if(new Date(exp_date) < new Date()){
        return false
      }
      return true
    }
    return false
  }

  logout(){
    localStorage.removeItem('expires_date')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    this.route.navigate(['/'])
  }

  handleError(error: HttpErrorResponse) {
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
    

  httpPostRequest(url: string, data: any): any{
    this.verifyDate()
    return this.http.post<any>(this.baseUrl + url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  httpGetRequest(url: string): any{
    this.verifyDate()
    return this.http.get<any>(this.baseUrl + url, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

  httpPutRequest(url: string, data: any): any{
    return this.http.put<any>(this.baseUrl + url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    )
  }

}
