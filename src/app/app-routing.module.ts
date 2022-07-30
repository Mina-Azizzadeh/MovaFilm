import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrancePermissionComponent } from './registration/entrance-permission/entrance-permission.component';
import { ForgotPasswordComponent } from './registration/forgot-password/forgot-password.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './registration/sign-in/sign-in.component';
import { SignUpComponent } from './registration/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
  },
  {
    path: 'Home',
    loadChildren: () =>
      import('./pages/pages.routing').then((m) => m.PagesRoutingModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./registration/registration.module').then(
        (m) => m.registrationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
