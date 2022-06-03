import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  authService: AuthService
  constructor(private http: HttpClient, authService: AuthService) {
    this.authService = authService
   }


  httpDeleteRequest(url: string): any{
    return this.http.delete<any>(this.authService.baseUrl + url, this.authService.httpOptions)
    .pipe(
      catchError(this.authService.handleError)
    )
  }
}
