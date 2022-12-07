import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movies-album.model';
import { MoviesAlbumService } from '../../services/movies-album.service';
@Component({
  selector: 'mova-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public movies!: Movie[];
  constructor(private moviesService: MoviesAlbumService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((res) => {
      console.log(res)
      this.movies = res;
    });
  }
}
