import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieAlbumComponent } from './movie-album/movie-album.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MovaInputComponent } from './mova-input/mova-input.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    MovieAlbumComponent,
    LoadingSpinnerComponent,
    MovaInputComponent
  ],
  exports: [
    NavbarComponent,
    MovieAlbumComponent,
    LoadingSpinnerComponent,
    MovaInputComponent
  ],
  imports: [
    CommonModule,
    NzInputModule,
    NzIconModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class ComponentsModule { }
