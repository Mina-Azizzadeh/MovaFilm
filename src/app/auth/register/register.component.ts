import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthRoutes } from '../auth-routes';
import { AuthServices } from '../auth-service';
import { AuthRegister } from '../../model/auth.model'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public passwordVisible = false;
  public password?: string;
  public login = true;
  public formGroup!: FormGroup;
  public isLoading = false
  public error = ''
  public errorPassword = ''
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private authService: AuthServices) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.login =
        param.get(AuthRoutes.RegisterationState) === AuthRoutes.Login;
    });

    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      remember: new FormControl(false)
    })
  }

  onClickSubmit() {
    if (this.formGroup.invalid) {
      return
    }
    let email = this.formGroup.controls['email'].value
    let password = this.formGroup.controls['password'].value
    this.isLoading = true
    let authObs: Observable<AuthRegister>;
    if (!this.login) {
      authObs = this.authService.signup(email, password)
    } else {
      authObs = this.authService.login(email, password)
    }

    authObs.subscribe({
      next: (res) => {
        this.isLoading = false
        this.error = ''
        console.log(res)
      }, error: (errorMessage) => {
        this.isLoading = false
        this.error = errorMessage
        console.log(errorMessage)
      }
    })
  }
}
