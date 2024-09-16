import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl, FormGroupDirective, NgForm, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgIf } from '@angular/common';
import { FormValidationService } from 'src/app/util/FormValidation.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    NgIf
   ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
              public formValidationService : FormValidationService,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, this.formValidationService.validateEmailOrCpf]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });   
  }

  getErrorMessage(field: string): string {
    return this.formValidationService.getErrorMessage(this.loginForm, field);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      const validUsername = 'navega@navega.com';
      const validPassword = 'navega';

      if ((username === validUsername || username === '123.456.789-00') && password === validPassword) {
        this.router.navigate(['/my-plan'])
      } else {
        alert('Usuário ou senha inválidos.');
      }
    }
  }
}
