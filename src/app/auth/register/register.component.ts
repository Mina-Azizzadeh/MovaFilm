import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthRoutes } from '../auth-routes';

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

  constructor(private activatedRoute: ActivatedRoute, private route: Router) { }

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
    console.log(this.formGroup.value)
    if (!this.login) {
      this.route.navigateByUrl(`auth/${AuthRoutes.AccountSetup}`)
      console.log(AuthRoutes.AccountSetup)
    }
  }
}
