import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSetupComponent } from './account-setup/account-setup.component';
import { ProfileComponent } from './account-setup/profile/profile.component';
import { AuthRoutes } from './auth-routes';
import { EntrancePermissionComponent } from './entrance-permission/entrance-permission.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: EntrancePermissionComponent },
  { path: `${AuthRoutes.AccountSetup}`, component: AccountSetupComponent },
  { path: `${AuthRoutes.AccountSetup}/${AuthRoutes.Profile}`, component: ProfileComponent },
  { path: `:${AuthRoutes.RegisterationState}`, component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule { }
