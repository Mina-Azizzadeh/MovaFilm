import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieAlbumComponent } from './movie-album/movie-album.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MovaInputComponent } from './mova-input/mova-input.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileAvatarComponent } from './profile-avatar/profile-avatar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [
    NavbarComponent,
    MovieAlbumComponent,
    LoadingSpinnerComponent,
    MovaInputComponent,
    ProfileAvatarComponent
  ],
  exports: [
    NavbarComponent,
    MovieAlbumComponent,
    LoadingSpinnerComponent,
    MovaInputComponent,
    ProfileAvatarComponent
  ],
  imports: [
    CommonModule, 
    NzInputModule,
    NzIconModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NzDropDownModule
  ],
})
export class ComponentsModule { }
