import { Component, OnInit } from '@angular/core';
import { AuthRoutes } from '../../auth-routes';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [NzMessageService],
})
export class ProfileComponent implements OnInit {
  isVisible = false;

  get authRoutes() {
    return AuthRoutes;
  }

  constructor() {}
  ngOnInit(): void {}
  
  showModal(): void {
    this.isVisible = true;
  }
}
