import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrancePermissionComponent } from './entrance-permission/entrance-permission.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'permission', component: EntrancePermissionComponent },
  { path: 'signIn', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
