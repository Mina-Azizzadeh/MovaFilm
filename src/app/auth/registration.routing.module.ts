import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSetupComponent } from './account-setup/account-setup.component';
import { ProfileComponent } from './account-setup/profile/profile.component';
import { AuthRoutes } from './auth-routes';
import { EntrancePermissionComponent } from './entrance-permission/entrance-permission.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewPasswordComponent } from './forgot-password/new-password/new-password.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: EntrancePermissionComponent },
  { path: `${AuthRoutes.AccountSetup}`, component: AccountSetupComponent },
  { path: `${AuthRoutes.AccountSetup}/${AuthRoutes.Profile}`, component: ProfileComponent },
  { path: `${AuthRoutes.forgotPassword}`, component: ForgotPasswordComponent },
  { path: `${AuthRoutes.newpassword}`, component: NewPasswordComponent },
  { path: `:${AuthRoutes.RegisterationState}`, component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule { }
