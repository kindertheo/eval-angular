import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { User, UserArray } from 'src/app/interface/userInterface';
import { DeleteService } from 'src/app/service/delete.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  userList: User[]
  loginService: LoginService

  constructor(private authService: AuthService, private deleteService: DeleteService, loginService: LoginService) { 
    this.userList = []
    this.loginService = loginService
    const that = this;
    this.authService.httpGetRequest('user').subscribe({
      next(ret: any) {
        that.userList = <UserArray>ret
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
    const url = 'user/' + id
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
