import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { TestBed, inject} from '@angular/core/testing';

import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';7
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

describe('AuthService', () => {
  let service: AuthService;
  let http: HttpClient
  let backend: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [AuthService],
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(AuthService);
  });

  beforeEach(
    inject([AuthService, HttpClient, HttpTestingController],
    (conf: AuthService, _h: HttpClient, _b: HttpTestingController) => { 
      service = conf; http = _h; backend = _b;}
    ));
  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
      httpMock.verify();
    }));
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('is Logged', () => {
    expect(service.isLogged()).toBeFalse()
  })

  it('logout', () => {
    service.logout()
    expect(service.isLogged()).toBeFalse()
  })


});
