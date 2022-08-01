import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAlbumComponent } from './movie-album.component';

describe('MovieAlbumComponent', () => {
  let component: MovieAlbumComponent;
  let fixture: ComponentFixture<MovieAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
