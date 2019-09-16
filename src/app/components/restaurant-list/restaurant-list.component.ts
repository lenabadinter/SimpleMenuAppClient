import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  restaurants: any = [];

  constructor(public restaurantService: RestaurantService) { }

  ngOnInit() {
    this.loadRestaurants();
  }

  // Issues list
  loadRestaurants() {
    return this.restaurantService.getRestaurants().subscribe((data: {}) => {
      this.restaurants = data;
    });
  }

}
