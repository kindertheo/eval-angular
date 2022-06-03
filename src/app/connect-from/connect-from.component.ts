import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-connect-from',
  templateUrl: './connect-from.component.html',
  styleUrls: ['./connect-from.component.css']
})
export class ConnectFromComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  connectForm: FormGroup
  constructor(formBuilder: FormBuilder) {
    this.connectForm = formBuilder.group({
      nom: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      prenom: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      mail: new FormControl("", [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
      telephone: new FormControl("", [
        Validators.required,
        this.validatorRe(/^[0-9]{10}$/)
      ])
    })
  }

  ngOnInit(): void {
  }
  validatorRe(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? null : { forbiddenName: { value: control.value } };
    };
  }

  submitForm() {
    if (this.connectForm.valid) {
      alert('Le formulaire est ok')
    }
    else {
      alert('il y a une erreur dans le formulaire')
    }
  }
}
