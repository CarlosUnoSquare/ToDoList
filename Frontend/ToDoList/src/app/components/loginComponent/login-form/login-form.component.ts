import { Component, OnInit } from '@angular/core';
import { LoginUserModel } from '../../../models/loginUser.model';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormGroupDirective,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent implements OnInit {
  login: LoginUserModel;
  form: FormGroup;
  error = {
    displayError: false,
    message: 'Error',
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginServices: LoginService
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.form = this.formBuilder.group(
      {
        userName: this.formBuilder.control('', Validators.required),
        password: this.formBuilder.control('', Validators.required),
      },
      { updateOn: 'change' }
    );
  }

  onSubmit(todoForm: FormGroupDirective) {
    if (this.form.valid) {
      this.login = { ...this.form.value };
      this.loginServices.loginUser(this.login).subscribe(
        (response) => {
          sessionStorage.setItem('token', response.data);
          this.router.navigate(['/todo']);
        },
        (error) => {
          this.error.message = error.error.errorMessage;
          this.error.displayError = true;
          this.form.reset();
          todoForm.resetForm();
          this.resetLoginMessage();
        }
      );
    }
  }

  resetLoginMessage() {
    setTimeout(() => {
      this.error.displayError = false;
    }, 4000);
  }
}
