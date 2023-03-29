import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movies-album.model';
import { MoviesAlbumService } from 'src/app/services/movies-album.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private movieServie: MoviesAlbumService) { }

  ngOnInit(): void {
    this.getMovieData()
  }
  getMovieData() {
    this.movieServie.getCarouselData().subscribe((result) => {
      this.movies = result
    })
  }

  searchValue(search: string) {
    const body: Movie[] = []
    this.movies.filter((res) => {
      if (res.name.includes(search)) {
        body.push(res)
        this.movies = body
        console.log(body)
      } else { console.log(body) }
    })
  }
}
