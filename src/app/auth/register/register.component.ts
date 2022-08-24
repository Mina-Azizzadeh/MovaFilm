import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.login =
        param.get(AuthRoutes.RegisterationState) === AuthRoutes.Login;
    });
  }
}
