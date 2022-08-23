import { NgModule } from '@angular/core';

import { EntrancePermissionComponent } from './entrance-permission/entrance-permission.component';
import { RegistrationComponent } from './registration.component';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegistrationRoutingModule } from './registration.routing.module';
import { RegisterComponent } from './register/register.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BidiModule } from '@angular/cdk/bidi';

@NgModule({
  declarations: [
    EntrancePermissionComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    RegisterComponent,
  ],
  imports: [
    RegistrationRoutingModule,
    CommonModule,
    NzInputModule,
    NzIconModule,
    BidiModule
  ],
  exports: [],
})
export class RegistrationModule {}
