import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movies-album.model';
import { MoviesAlbumService } from 'src/app/services/movies-album.service';

@Component({
  selector: 'mova-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.scss']
})
export class CarouselHomeComponent implements OnInit {
  listOfMovie: Movie[] = []
  constructor(private movieService: MoviesAlbumService) { }

  ngOnInit(): void {
    this.movieService.getCarouselData().subscribe((res) => {
      this.listOfMovie = res
    })
  }

  onPlay(movie: Movie) {
    console.log(movie)
  }

  onClickMyList(movie: Movie) {
    console.log(movie)
  }
}
