import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepTagDirective } from './rep-tag.directive';

@NgModule({
  declarations: [
    RepTagDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RepTagDirective
  ]
})
export class DirectivesModule { }
