import { Component, OnInit } from '@angular/core';
import { AuthRoutes } from '../auth-routes';

@Component({
  selector: 'app-entrance-permission',
  templateUrl: './entrance-permission.component.html',
  styleUrls: ['./entrance-permission.component.scss'],
})
export class EntrancePermissionComponent implements OnInit {
  get authRoutes() {
    return AuthRoutes;
  }
  constructor() {}

  ngOnInit(): void {}
  test(){
    console.log(this.authRoutes.Login)
  }
}
