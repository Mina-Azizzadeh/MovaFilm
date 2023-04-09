import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Filter } from 'src/app/model/explore';
import { Movie } from 'src/app/model/movies-album.model';
import { ExploreService } from 'src/app/services/explore.service';
import { MoviesAlbumService } from 'src/app/services/movies-album.service';

@Component({
  selector: 'app-list-of-user-favorites',
  templateUrl: './list-of-user-favorites.component.html',
  styleUrls: ['./list-of-user-favorites.component.scss']
})
export class ListOfUserFavoritesComponent implements OnInit {
  public movies: Movie[] = [];
  public filterItems: Filter = {
    id: 0,
    title: '',
    items: []
  };

  constructor(private movieServie: MoviesAlbumService, private filterService: ExploreService) { }

  ngOnInit(): void {
    this.getMovieData()
    this.getCategory()
  }

  getMovieData() {
    this.movieServie.getCarouselData().subscribe((result) => {
      // this.movies = result
    })
  }

  getCategory() {
    this.filterService.getFiltersItem().pipe(
      map((res) => res.filter((result) => { return result.id == 1 }))
    ).subscribe((res) => {
      this.filterItems = res[0]
    })
  }
}
