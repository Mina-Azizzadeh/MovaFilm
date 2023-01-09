import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { ControlValueAccessorComponent } from '../control-value-accessor/control-value-accessor.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages.routing';

@NgModule({
  declarations: [HomeComponent,ControlValueAccessorComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
    FormsModule
  ],
  exports: [],
})
export class PagesModule { }
