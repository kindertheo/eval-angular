import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AuthService } from '../service/auth.service';
import { User, UserArray } from '../interface/userInterface';
import { Article, ArticleArray } from '../interface/articleInterface';
import { Comment, CommentArray } from '../interface/commentInterface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User
  commentList: Comment[]
  articleList: Article[]
  id: number
  baseRoute: string
  authService: AuthService

  constructor(authService: AuthService, private route: ActivatedRoute) { 
    this.id = 0
    this.user = <User>{}
    this.commentList = []
    this.articleList = []
    this.baseRoute = ''
    this.authService = authService
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params['id']
      this.baseRoute = 'user/' + this.id + "/"
      console.log(this.id)
      this.getDataForUser()
      }
    )
  }

  getDataForUser(): void{
    console.log("baseroute", this.baseRoute)
    const that = this

    this.authService.httpGetRequest(this.baseRoute + 'user').subscribe({
      next(ret: any) {
        that.user = <User>ret
      },
      error(err: any){
        alert(err)
        console.log(err)
      }
    })

    this.authService.httpGetRequest(this.baseRoute + 'article').subscribe({
      next(ret: any) {
        that.articleList = <ArticleArray>ret
      },
      error(err: any){
        alert(err)
        console.log(err)
      }
    })

    this.authService.httpGetRequest(this.baseRoute + 'comment').subscribe({
      next(ret: any) {
        that.commentList = <CommentArray>ret
      },
      error(err: any){
        alert(err)
        console.log(err)
      }
    })
  }
}
