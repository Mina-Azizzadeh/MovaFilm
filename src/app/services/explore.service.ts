import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Filter } from '../model/explore';

@Injectable({
  providedIn: 'root',
})

export class ExploreService {
  constructor(private http: HttpClient) { }

  getFiltersItem() {
    return this.http.get<Filter[]>('../assets/mocks-data/filter-data.json').pipe(
      map((filter) => {
        return filter.map(res => {
          return ({
            ...res,
            id: res.id,
            title: res.title,
            items: res.items.map((item) => ({
              ...item,
              checked: false
            }))
          })
        })
      }))
  }
}
