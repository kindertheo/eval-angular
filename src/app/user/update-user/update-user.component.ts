import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interface/userInterface';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  
  id: number
  baseRoute: string
  connectForm: FormGroup
  user: User

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) 
     {
    this.id = 0
    this.baseRoute = ''
    this.user = <User>{}

    this.connectForm = formBuilder.group({
      niveau: new FormControl("", [
        Validators.required,
        Validators.minLength(1)
      ]),
      pseudo: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      avatar: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),

    })
   }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params['id']
      this.baseRoute = 'user/' + this.id + "/"
      this.callApiForInfo(this.authService, this.baseRoute)

      }
    )
  }
  
  callApiForInfo(authService: AuthService, url: string): void{
    const that = this;
    authService.httpGetRequest(url).subscribe({
      next(ret: any) {
        that.connectForm.reset(<User>ret)
      },
      error(err: any){
        console.log("Error ", url, err)
      }
    })
  }

  submitForm(): void{
    const that = this;
    this.authService.httpPutRequest(this.baseRoute, this.user).subscribe({
      next(ret: any) {
        that.connectForm.reset(<User>ret)
        that.router.navigate(['user'])
      },
      error(err: any){
        console.log("Error ", this.baseRoute, err)
      }
    })
  }

}
