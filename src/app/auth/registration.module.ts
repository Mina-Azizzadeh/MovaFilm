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
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { NewPasswordComponent } from './forgot-password/new-password/new-password.component';
import { SuccessModalComponent } from './forgot-password/success-modal/success-modal.component';

@NgModule({
  declarations: [
    EntrancePermissionComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    AccountSetupComponent,
    ProfileComponent,
    NewPasswordComponent,
    SuccessModalComponent
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
    NzModalModule,
    NzGridModule,
    NgxOtpInputModule,

  ],
  exports: [],
  providers:[NzModalService]
})
export class RegistrationModule { }
