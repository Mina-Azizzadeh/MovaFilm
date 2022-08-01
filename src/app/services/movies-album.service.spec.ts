import { TestBed } from '@angular/core/testing';

import { MoviesAlbumService } from './movies-album.service';

describe('MoviesAlbumService', () => {
  let service: MoviesAlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesAlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
