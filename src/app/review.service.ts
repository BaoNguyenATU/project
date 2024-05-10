import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private api = 'https://www.omdbapi.com/?apikey=2ee2ed84&s=%27ronaldo%27';

  constructor(private httpClient:HttpClient) { }

  GetMovieData():Observable<any>
  {
    return this.httpClient.get('https://www.omdbapi.com/?apikey=2ee2ed84&s=%27ronaldo%27')
  }

  searchMovies(query: string): Observable<any>
  {
    const url = `${this.api}/search?query=${query}`;
    return this.httpClient.get<any>(url);
  }
}
