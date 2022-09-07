import { Component, OnInit } from '@angular/core';
import { AccountSetupInterest } from 'src/app/model/auth.model';
import { AuthRoutes } from '../auth-routes';
import { AccountSetupService } from './account-setup.service';

@Component({
  selector: 'app-account-setup',
  templateUrl: './account-setup.component.html',
  styleUrls: ['./account-setup.component.scss'],
})
export class AccountSetupComponent implements OnInit {
  public interests!: AccountSetupInterest[];
  constructor(private AccountSetup: AccountSetupService) {}

  get authRoutes() {
    return AuthRoutes;
  }

  ngOnInit(): void {
    this.AccountSetup.getInterests().subscribe((res) => {
      this.interests = res;
    });
  }
  onclickInterest(interest: AccountSetupInterest) {
    console.log(interest);
  }
}
