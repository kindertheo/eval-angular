import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Article } from '../interface/articleInterface';
import { AuthService } from '../service/auth.service';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  id: number
  baseRoute: string
  authService: AuthService
  article: Article
  loginService: LoginService

  constructor(private route: ActivatedRoute, authService: AuthService, loginService: LoginService) {
    this.id = 0
    this.baseRoute = ''
    this.authService = authService
    this.article = <Article>{}
    this.loginService = loginService
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params['id']
      this.baseRoute = 'article/' + this.id + "/"
      this.callApiForInfo(this.authService, this.baseRoute)
      }
    )
  }

  callApiForInfo(authService: AuthService, url: string): void{
    const that = this;
    authService.httpGetRequest(url).subscribe({
      next(ret: any) {
        that.article = <Article>ret
        console.log("return ", that.article)
      },
      error(err: any){
        console.log("Error ", url, err)
      }
    })
  }
}