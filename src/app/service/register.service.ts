import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterInterface } from '../interface/authInterface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = "https://reseau.jdedev.fr/api/user/"
  returnApi: any
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  register(register: RegisterInterface){
    return this.http.post<any>(this.url, register, this.httpOptions).subscribe(
      res => console.log(res)
    )
  }
}
