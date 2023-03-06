import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';
import { CategoryOfFilm } from 'src/app/model/movies-album.model';
import { MoviesAlbumService } from 'src/app/services/movies-album.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  public movies!: CategoryOfFilm;
  constructor(
    private activeRoute: ActivatedRoute,
    private moviesService: MoviesAlbumService) { }

  ngOnInit(): void {
    this.getMoviesList()
  }

  getMoviesList() {
    const idActivetedRoute = this.activeRoute.snapshot.params['id']
    this.moviesService.getMovies().pipe(
      map((result) => {
        return result.find((result) => result.id == idActivetedRoute)
      }),
    ).subscribe((result) => {
      if (result == undefined) {
        return
      }
      this.movies = result
    })
  }
}