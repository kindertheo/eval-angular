import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AuthService } from '../service/auth.service';
import { User, UserArray } from '../interface/userInterface';
import { Article, ArticleArray } from '../interface/articleInterface';
import { Comment, CommentArray } from '../interface/commentInterface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User
  commentList: Comment[]
  articleList: Article[]
  id: number
  baseRoute: string
  authService: AuthService

  constructor(authService: AuthService, private route: ActivatedRoute) { 
    this.id = 0
    this.user = {'avatar': '', 'email': '', 'password': '', 'pseudo': '', 'niveau': 0, 'id': 0}
    this.commentList = []
    this.articleList = []
    this.baseRoute = ''
    this.authService = authService
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params['id']
      this.baseRoute = 'user/' + this.id + "/"
      this.callApiForUserInfo(this.authService)
      }
    )
  }

  callApiForUserInfo(authService: AuthService){
    const that = this;

    authService.httpGetRequest(this.baseRoute).subscribe({
      next(ret: any) {
        that.user = <User>ret
        console.log(that.user)
      },
      error(err: any){
        alert(err)
        console.log(this.baseRoute)
        console.log(err)
      }
    })

    authService.httpGetRequest(this.baseRoute + 'article').subscribe({
      next(ret: any) {
        that.articleList = <ArticleArray>ret
        console.log(that.articleList)
      },
      error(err: any){
        alert(err)
        console.log(err)
      }
    })

    authService.httpGetRequest(this.baseRoute + 'comment').subscribe({
      next(ret: any) {
        that.commentList = <CommentArray>ret
        console.log(that.commentList)
      },
      error(err: any){
        alert(err)
        console.log(err)
      }
    })
  }

}
