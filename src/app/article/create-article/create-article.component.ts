import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

interface ArticleCreate{
  titre: string,
  contenu: string
}

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  id: number
  baseRoute: string
  connectForm: FormGroup
  article: ArticleCreate

  constructor(private authService: AuthService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) 
     {
    this.id = 0
    this.baseRoute = 'article'
    this.article = <ArticleCreate>{}

    this.connectForm = formBuilder.group({
      titre: new FormControl("", [
        Validators.required,
        Validators.minLength(10)
      ]),
      contenu: new FormControl("", [
        Validators.required,
        Validators.minLength(10)
      ]),
    })
   }


  submitForm(): void{
    const that = this;
    this.article.contenu = this.connectForm.value.contenu
    this.article.titre = this.connectForm.value.titre
    this.authService.httpPostRequest(this.baseRoute, this.article).subscribe({
      next(ret: any) {
        console.log("success", ret)
        that.router.navigate(['/article'])
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
