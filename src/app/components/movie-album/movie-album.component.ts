import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CategoryOfFilm, Movie } from 'src/app/model/movies-album.model';
import { MoviesAlbumService } from 'src/app/services/movies-album.service';

@Component({
  selector: 'movie-album',
  templateUrl: './movie-album.component.html',
  styleUrls: ['./movie-album.component.scss'],
})
export class MovieAlbumComponent implements OnInit {
  @Input() listOfMovie: CategoryOfFilm[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onShowMore(moviesCategory: any) {
    console.log(moviesCategory)
    this.router.navigate(['mova', moviesCategory.title, moviesCategory.id])
  }
}
