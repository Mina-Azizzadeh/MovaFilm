import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './auth/registration.component';
import { AuthLoadGuard } from './auth/services/auth-load.guard';
import { AuthGuard } from './auth/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
  },
  {
    path: 'mova',
    // canLoad:[AuthLoadGuard],
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
