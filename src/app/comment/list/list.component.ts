import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Comment, CommentArray } from '../../interface/commentInterface'
import { DeleteService } from 'src/app/service/delete.service';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  commentList: Comment[]
  loginService: LoginService

  constructor(private authService: AuthService, private deleteService: DeleteService, loginService: LoginService) { 
    this.commentList = []
    this.loginService = loginService
    const that = this;
    this.authService.httpGetRequest('comment').subscribe({
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

  ngOnInit(): void {
  }

  onClickDelete(id: number){
    console.log("onclickdelete", id)
    const url = 'comment/' + id
    this.deleteService.httpDeleteRequest(url).subscribe({
      next(ret: any) {
        console.log("deleted", ret)
      },
      error(err: any){
        console.log(this.baseRoute)
        console.log(err)
      }
    })
  }
  
}