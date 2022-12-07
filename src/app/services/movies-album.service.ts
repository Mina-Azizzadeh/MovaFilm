import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../model/movies-album.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesAlbumService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<Movie[]>('../assets/mocks-data/filmMock.json');
  }
}
