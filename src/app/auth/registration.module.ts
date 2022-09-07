import { NgModule } from '@angular/core';

import { EntrancePermissionComponent } from './entrance-permission/entrance-permission.component';
import { RegistrationComponent } from './registration.component';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegistrationRoutingModule } from './registration.routing.module';
import { RegisterComponent } from './register/register.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { BidiModule } from '@angular/cdk/bidi';
import { ComponentsModule } from '../components/components.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountSetupComponent } from './account-setup/account-setup.component';
import { ProfileComponent } from './account-setup/profile/profile.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [
    EntrancePermissionComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    AccountSetupComponent,
    ProfileComponent,
  ],
  imports: [
    RegistrationRoutingModule,
    CommonModule,
    NzInputModule,
    NzIconModule,
    BidiModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzUploadModule,
    NzModalModule
  ],
  exports: [],
})
export class RegistrationModule {}
