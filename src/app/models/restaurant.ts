export class Restaurant {
  id: number;
  name: string;
  menu: RestaurantMenu;
}

export class RestaurantMenu {
  name: string;
  dishes: RestaurantMenuItem[];
}

export class RestaurantMenuItem {
  name: string;
  price: number;
}
