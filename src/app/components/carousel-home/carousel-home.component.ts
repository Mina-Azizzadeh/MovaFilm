import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movies-album.model';

@Component({
  selector: 'mova-carousel-home',
  templateUrl: './carousel-home.component.html',
  styleUrls: ['./carousel-home.component.scss']
})
export class CarouselHomeComponent implements OnInit {
  @Input() movies: Movie[] = []

  constructor() { }

  ngOnInit(): void {
  }
  onPlay(movie: Movie) {
    console.log(movie)
  }

  onClickMyList(movie: Movie) {
    console.log(movie)
  }
}
