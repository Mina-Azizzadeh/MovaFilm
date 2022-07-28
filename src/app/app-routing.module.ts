import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrancePermissionComponent } from './auth/entrance-permission/entrance-permission.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { RegistrationComponent } from './auth/registration.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/registration.module').then(
        (m) => m.registrationModule
      ),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
