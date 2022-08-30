import { Component, OnInit } from '@angular/core';
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

  constructor(private activatedRoute: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.login =
        param.get(AuthRoutes.RegisterationState) === AuthRoutes.Login;
    });
  }

  onClickRegister() {
    if (!this.login) {
      this.route.navigateByUrl(`auth/${AuthRoutes.AccountSetup}`)
      console.log(AuthRoutes.AccountSetup)
    }
  }
}
