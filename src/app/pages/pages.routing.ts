import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from '../components/movies-list/movies-list.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './home/notification/notification.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [


  {
    path: '',
    component: PagesComponent, children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: ':name/:id',
        component: MoviesListComponent
      },
      {
        path: 'notification',
        component: NotificationComponent
      },
      {
        path: 'explore',
        component: ExploreComponent,
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
