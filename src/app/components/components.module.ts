import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { NavbarComponent } from './navbar/navbar.component';
import { MovieAlbumComponent } from './movie-album/movie-album.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MovaInputComponent } from './mova-input/mova-input.component';
import { ProfileAvatarComponent } from './profile-avatar/profile-avatar.component';
import { MovaPinInputComponent } from './mova-pin-input/mova-pin-input.component';
import { DirectivesModule } from '../directives/directives.module';
import { MovaLikeHeartComponent } from './mova-like-heart/mova-like-heart.component';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieItemsComponent } from './movie-items/movie-items.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MovieAlbumComponent,
    LoadingSpinnerComponent,
    MovaInputComponent,
    ProfileAvatarComponent,
    MovaPinInputComponent,
    MovaLikeHeartComponent,
    CarouselHomeComponent,
    MoviesListComponent,
    MovieItemsComponent,
    SearchBarComponent,
  ],
  exports: [
    NavbarComponent,
    MovieAlbumComponent,
    LoadingSpinnerComponent,
    MovaInputComponent,
    ProfileAvatarComponent,
    MovaPinInputComponent,
    CarouselHomeComponent,
    MoviesListComponent,
    MovieItemsComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    NzInputModule,
    NzIconModule,
    ReactiveFormsModule,
    FormsModule,
    NzDropDownModule,
    NzGridModule,
    DirectivesModule,
    RouterModule,
    NzTabsModule,
    NzCarouselModule,
    RouterModule,

  ],
})
export class ComponentsModule { }
