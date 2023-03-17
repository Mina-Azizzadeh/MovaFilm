import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { ControlValueAccessorComponent } from '../control-value-accessor/control-value-accessor.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages.routing';
import { NotificationComponent } from './home/notification/notification.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    HomeComponent,
    ControlValueAccessorComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
    FormsModule,
    RouterModule,
    NzIconModule,
  ],
  exports: [],
})
export class PagesModule { }
