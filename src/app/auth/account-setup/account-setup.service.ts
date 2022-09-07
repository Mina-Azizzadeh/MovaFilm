import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountSetupInterest } from 'src/app/model/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AccountSetupService {
  public interestsUser = '0';
  constructor(private http: HttpClient) {}

  getInterests() {
    return this.http.get<AccountSetupInterest[]>(
      '../assets/mocks-data/movie-genres.json'
    );
  }

  setLocalStorag() {
    localStorage.setItem('interested', this.interestsUser);
  }
}
