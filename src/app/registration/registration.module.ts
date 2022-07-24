import { NgModule } from '@angular/core';

import { EntrancePermissionComponent } from './entrance-permission/entrance-permission.component';
import { RegistrationRoutingModule } from './registration.routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RegistrationComponent } from './registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    EntrancePermissionComponent,
    RegistrationComponent,
    ForgotPasswordComponent
  ],
  imports: [
    RegistrationRoutingModule,
    CommonModule
      ],
    exports: [],
})
export class registrationModule { }
