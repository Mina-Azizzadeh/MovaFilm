import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieAlbumComponent } from './movie-album/movie-album.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MovieAlbumComponent
  ],
  exports: [NavbarComponent,MovieAlbumComponent],
  imports: [CommonModule],
})

export class ComponentsModule {}
