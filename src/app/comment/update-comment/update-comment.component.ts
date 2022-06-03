import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/interface/commentInterface';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.css']
})
export class UpdateCommentComponent implements OnInit {

  id: number
  baseRoute: string
  connectForm: FormGroup
  comment: Comment

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) 
     {
    this.id = 0
    this.baseRoute = ''
    this.comment = <Comment>{}

    this.connectForm = formBuilder.group({
      contenu: new FormControl("", [
        Validators.required,
        Validators.minLength(10)
      ]),
      creation: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
    })
   }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params['id']
      this.baseRoute = 'comment/' + this.id + "/"
      this.callApiForInfo(this.authService, this.baseRoute)

      }
    )
  }
  
  callApiForInfo(authService: AuthService, url: string): void{
    const that = this;
    authService.httpGetRequest(url).subscribe({
      next(ret: any) {
        that.connectForm.reset(<Comment>ret)
      },
      error(err: any){
        console.log("Error ", url, err)
      }
    })
  }

  submitForm(): void{
    const that = this;
    this.authService.httpPutRequest(this.baseRoute, this.comment).subscribe({
      next(ret: any) {
        that.connectForm.reset(<Comment>ret)
        that.router.navigate(['comment'])
      },
      error(err: any){
        console.log("Error ", this.baseRoute, err)
      }
    })
  }


}
