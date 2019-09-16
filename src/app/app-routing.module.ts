import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { EditRestaurantDetailsComponent } from './components/edit-restaurant-details/edit-restaurant-details.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path:  '', component: RestaurantListComponent },
  { path: 'details/:id', component: RestaurantDetailsComponent },
  { path: 'edit/:id', component: EditRestaurantDetailsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ RestaurantListComponent, RestaurantDetailsComponent,
  EditRestaurantDetailsComponent ];
