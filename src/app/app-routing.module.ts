import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrancePermissionComponent } from './registration/entrance-permission/entrance-permission.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './registration/sign-in/sign-in.component';
import { SignUpComponent } from './registration/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'Entrance',
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
