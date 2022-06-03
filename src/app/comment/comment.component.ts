import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Comment } from '../interface/commentInterface';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {  
  id: number
  baseRoute: string
  authService: AuthService
  comment: Comment

  constructor(private route: ActivatedRoute, authService: AuthService) {
    this.id = 0
    this.baseRoute = ''
    this.authService = authService
    this.comment = <Comment>{}
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params['id']
      this.baseRoute = 'comment/' + this.id + "/"
      this.callApiForInfo(this.authService)
      }
    )
  }

  callApiForInfo(authService: AuthService){
    const that = this;

    authService.httpGetRequest(this.baseRoute).subscribe({
      next(ret: any) {
        that.comment = <Comment>ret
        console.log(that.comment)
      },
      error(err: any){
        alert(err)
        console.log(this.baseRoute)
        console.log(err)
      }
    })
  }

}
