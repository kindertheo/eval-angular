import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';


import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {inject} from '@angular/core/testing';

import { AuthService } from '../service/auth.service';
import { RouterTestingModule } from '@angular/router/testing';import { LoginService } from '../service/login.service';
7

describe('HomeComponent', () => {
  let service: AuthService;
  let http: HttpClient
  let backend: HttpTestingController
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [AuthService, LoginService],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();;
    service = TestBed.inject(AuthService);
  });

  beforeEach(
    inject([AuthService, LoginService, HttpClient, HttpTestingController],
    (conf: AuthService, _h: HttpClient, _b: HttpTestingController) => { 
      service = conf; http = _h; backend = _b;}
    ));
  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
      httpMock.verify();
    }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
