import { OnInit, Component } from '@angular/core';
import { CategoryOfFilm } from 'src/app/model/movies-album.model';
import { MoviesAlbumService } from '../../services/movies-album.service';


@Component({
  selector: 'mova-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  public movies: CategoryOfFilm[] = [];

  constructor(private moviesService: MoviesAlbumService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((result) => {
      this.movies = result;
    });
  }
}
