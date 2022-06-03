import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


interface CommentCreate{
  contenu: string
  idArt: number    
}


@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  id: number
  baseRoute: string
  connectForm: FormGroup
  comment: CommentCreate

  constructor(private authService: AuthService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) 
     {
    this.id = 0
    this.baseRoute = 'comment'
    this.comment = <CommentCreate>{}

    this.connectForm = formBuilder.group({
      contenu: new FormControl("", [
        Validators.required,
        Validators.minLength(10)
      ]),
    })
   }


  submitForm(): void{
    const that = this;
    this.comment.contenu = this.connectForm.value.contenu
    this.comment.idArt = this.id
    this.authService.httpPostRequest(this.baseRoute, this.comment).subscribe({
      next(ret: any) {
        console.log("success", ret)
        that.router.navigate(['/comment'])
      },
      error(err: any){
        console.log("Error ", this.baseRoute, err)
      }
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params['id']
      }
    )
    }
}
