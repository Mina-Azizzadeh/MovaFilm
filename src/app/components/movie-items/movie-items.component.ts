import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movies-album.model';

@Component({
  selector: 'movie-items',
  templateUrl: './movie-items.component.html',
  styleUrls: ['./movie-items.component.scss']
})
export class MovieItemsComponent implements OnInit {
  @Input() movies: Movie[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
