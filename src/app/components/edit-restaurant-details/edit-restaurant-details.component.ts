import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-restaurant-details',
  templateUrl: './edit-restaurant-details.component.html',
  styleUrls: ['./edit-restaurant-details.component.scss']
})
export class EditRestaurantDetailsComponent implements OnInit {

  restaurant: any;
  id: number;

  constructor(private route: ActivatedRoute, private router: Router, private restaurantService: RestaurantService) {
  }

  ngOnInit() {
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

  saveRestaurantDetails() {
    this.restaurantService.saveRestaurantDetails(this.restaurant).subscribe(data => {
      this.router.navigate(['/details/', this.restaurant.id]);
  });

  }
}
