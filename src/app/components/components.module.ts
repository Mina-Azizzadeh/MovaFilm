import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieAlbumComponent } from './movie-album/movie-album.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MovaInputComponent } from './mova-input/mova-input.component';

@NgModule({
  declarations: [NavbarComponent, MovieAlbumComponent, LoadingSpinnerComponent, MovaInputComponent],
  exports: [NavbarComponent, MovieAlbumComponent, LoadingSpinnerComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
