import { Component, OnInit } from '@angular/core';
import { Restaurant, RestaurantMenuItem } from 'src/app/models/restaurant';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {

  restaurant: any;
  isAdmin: boolean;
  id: number;

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        if (params.isAdmin) {
          this.isAdmin = Boolean(JSON.parse(params.isAdmin));
        }
    });
    if (this.route.snapshot.paramMap.has('id')) {
      this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
      this.loadRestaurant(this.id);
    }
  }

  // Load Single Restaurant
  loadRestaurant(id: number) {
    return this.restaurantService.getRestaurantById(id).subscribe((data: {}) => {
      this.restaurant = data;
    });
  }

}
