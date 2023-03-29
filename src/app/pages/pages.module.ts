import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { ControlValueAccessorComponent } from '../control-value-accessor/control-value-accessor.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages.routing';
import { NotificationComponent } from './home/notification/notification.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ExploreComponent } from './explore/explore.component';
import { PagesComponent } from './pages.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ListOfUserFavoritesComponent } from './list-of-user-favorites/list-of-user-favorites.component';

@NgModule({
  declarations: [
    HomeComponent,
    ControlValueAccessorComponent,
    NotificationComponent,
    ExploreComponent,
    PagesComponent,
    ListOfUserFavoritesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
    FormsModule,
    RouterModule,
    NzIconModule,
    NzGridModule,
    NzInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [],
})
export class PagesModule { }
