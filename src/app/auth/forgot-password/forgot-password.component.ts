import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { AuthRoutes } from '../auth-routes';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 4,
  }
  public hasOtp = false
  public secound = 60
  public otp = ''
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onClickContinue() {
    this.hasOtp = true
    let intervalSecound = setInterval(() => {
      if (this.secound == 0) {
        clearInterval(intervalSecound)
      }
      else {
        --this.secound
      }
    }, 1000)
  }

  onChange(event: unknown[]) {
    if (!event.includes(null)) {
      let otp = event.join('')
      this.otp = otp
    }
  }

  VerifyOtp() {
    if (!this.otp) {
      return
    }
    console.log('has otp')
    console.log(this.otp)
    this.route.navigateByUrl(`auth/${AuthRoutes.newpassword}`)
  }
}
