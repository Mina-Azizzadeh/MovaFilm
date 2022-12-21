import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './navbar/navbar.component';
import { MovieAlbumComponent } from './movie-album/movie-album.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MovaInputComponent } from './mova-input/mova-input.component';
import { ProfileAvatarComponent } from './profile-avatar/profile-avatar.component';
import { MovaPinInputComponent } from './mova-pin-input/mova-pin-input.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    NavbarComponent,
    MovieAlbumComponent,
    LoadingSpinnerComponent,
    MovaInputComponent,
    ProfileAvatarComponent,
    MovaPinInputComponent,
  ],
  exports: [
    NavbarComponent,
    MovieAlbumComponent,
    LoadingSpinnerComponent,
    MovaInputComponent,
    ProfileAvatarComponent,
    MovaPinInputComponent
  ],
  imports: [
    CommonModule,
    NzInputModule,
    NzIconModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NzDropDownModule,
    NzGridModule,
    DirectivesModule
  ],
})
export class ComponentsModule { }
