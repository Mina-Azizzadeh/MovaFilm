import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages.routing';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PagesRoutingModule , ComponentsModule],
  exports: [],
})
export class PagesModule {}
