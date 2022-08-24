import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutes } from './auth-routes';
import { EntrancePermissionComponent } from './entrance-permission/entrance-permission.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path: '', component: EntrancePermissionComponent },
  { path: `:${AuthRoutes.RegisterationState}`, component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
