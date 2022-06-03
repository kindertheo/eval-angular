import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/interface/articleInterface';
import { AuthService } from 'src/app/service/auth.service';
import { ArticleComponent } from '../article.component';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  id: number
  baseRoute: string
  connectForm: FormGroup
  article: Article

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder
     ) {
    this.id = 0
    this.baseRoute = ''
    this.article = <Article>{}

    this.connectForm = formBuilder.group({
      titre: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      contenu: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),

    })
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
        that.connectForm.reset(<Article>ret)
      },
      error(err: any){
        console.log("Error ", url, err)
      }
    })
  }

  submitForm(): void{
    const that = this;
    this.authService.httpPutRequest(this.baseRoute, this.article).subscribe({
      next(ret: any) {
        that.connectForm.reset(<Article>ret)
        that.router.navigate(['article'])
      },
      error(err: any){
        console.log("Error ", this.baseRoute, err)
      }
    })
  }


  
}
