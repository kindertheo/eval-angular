import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { TestBed, inject} from '@angular/core/testing';

import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';7
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let http: HttpClient
  let backend: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [AuthService],
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(LoginService);
  });

  beforeEach(
    inject([LoginService, HttpClient, HttpTestingController],
    (conf: LoginService, _h: HttpClient, _b: HttpTestingController) => { 
      service = conf; http = _h; backend = _b;}
    ));
  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
      httpMock.verify();
    }));
});
