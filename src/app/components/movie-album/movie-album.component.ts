import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movies-album.model';

@Component({
  selector: 'movie-album',
  templateUrl: './movie-album.component.html',
  styleUrls: ['./movie-album.component.scss'],
})
export class MovieAlbumComponent implements OnInit {
  @Input() title: string = '';
  @Input() movies!: Movie[] ;
  constructor( ) {}

  ngOnInit(): void {
    console.log(this.movies)
  }
}
