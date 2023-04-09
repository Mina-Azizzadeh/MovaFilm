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
  public moviesSearch: Movie[] = []

  constructor(private movieServie: MoviesAlbumService) { }

  ngOnInit(): void {
    this.getMovieData()
  }

  getMovieData() {
    this.movieServie.getCarouselData().subscribe((result) => {
      this.movies = result
      this.moviesSearch.length >= 0 ? this.moviesSearch = result : []
    })
  }

  searchValue(search: string) {
    let body: Movie[] = []
    search.toLowerCase()
    this.movies.filter((res) => {
      if (res.name.toLowerCase().includes(search.toLowerCase())) {
        body.push(res)
      }
    })
    this.moviesSearch = body
  }


}
