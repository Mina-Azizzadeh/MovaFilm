import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesAlbumService } from 'src/app/services/movies-album.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private moviesService: MoviesAlbumService) { }

  ngOnInit(): void {
    this.getMoviesList()
  }

  getMoviesList() {
    const idActivetedRoute = this.activeRoute.snapshot.params['id']
    // const listOfMovies = this.moviesService.getlistOfMovie()
  }
}
