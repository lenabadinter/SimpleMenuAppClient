import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Restaurant } from './models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  // Base Url
  baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  // GET Restaurants with menu
  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.baseUrl + '/api/restaurants/')
    .pipe(
      retry(1)
    );
  }

  // GET Restaurants with menu
  getRestaurantById(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(this.baseUrl + '/api/restaurants/' + id)
    .pipe(
      retry(1)
    );
  }

  saveRestaurantDetails(restaurant: Restaurant) {
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {
      headers: httpHeaders
    };

    return this.http.put(this.baseUrl + '/api/restaurants/' + restaurant.id, JSON.stringify(restaurant), options);
  }
}
