import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filter } from '../model/explore';

@Injectable({
  providedIn: 'root',
})

export class ExploreService {
  constructor(private http: HttpClient) { }

  getFiltersItem() {
    return this.http.get<Filter[]>('../assets/mocks-data/filter-data.json')
  }

}
