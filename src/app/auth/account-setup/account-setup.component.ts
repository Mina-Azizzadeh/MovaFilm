import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountSetupInterest } from 'src/app/model/auth.model';
import { AuthRoutes } from '../auth-routes';
import { AccountSetupService } from './account-setup.service';

@Component({
  selector: 'app-account-setup',
  templateUrl: './account-setup.component.html',
  styleUrls: ['./account-setup.component.scss'],
})
export class AccountSetupComponent implements OnInit {
  public interests!: AccountSetupInterest[]
  public userInterests: AccountSetupInterest[] = []

  constructor(
    private AccountSetup: AccountSetupService,
    private router: Router
  ) { }

  get authRoutes() {
    return AuthRoutes;
  }

  ngOnInit(): void {
    this.AccountSetup.getInterests().subscribe((res) => {
      this.interests = res;
    });
  }

  onclickInterest(interest: AccountSetupInterest) {
    this.userInterests.push(interest)
  }

  continueSubmit() {
    localStorage.setItem('interested', JSON.stringify(this.userInterests));
    this.router.navigateByUrl(`auth/${AuthRoutes.AccountSetup}/${AuthRoutes.Profile}`)
  }
}
