import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { RouterModule } from '@angular/router';
import { Article, ArticleArray } from '../../interface/articleInterface'
import { DeleteService } from 'src/app/service/delete.service';
import { LoginComponent } from 'src/app/login/login.component';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [LoginComponent]
})
export class ListComponent implements OnInit {

  articleList: Article[]
  loginService: LoginService

  constructor(private authService: AuthService, private deleteService: DeleteService, loginService: LoginService) { 
    
    this.articleList = []
    this.loginService = loginService
    const that = this;
    
    this.authService.httpGetRequest('article').subscribe({
      next(ret: any) {
        that.articleList = <ArticleArray>ret
        console.log(that.articleList)
      },
      error(err: any){
        alert(err)
        console.log(err)
      }
    })
  }

  onClickDelete(id: number){
    console.log("onclickdelete", id)
    const url = 'article/' + id
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

  
  ngOnInit(): void {
  }

}
