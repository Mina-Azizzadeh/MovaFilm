import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrancePermissionComponent } from './entrance-permission/entrance-permission.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: EntrancePermissionComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
