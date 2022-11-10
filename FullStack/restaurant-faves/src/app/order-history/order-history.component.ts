import { Component, OnInit } from '@angular/core';
import { Order } from '../interfaces/Order';
import { RestaurantFavesService } from '../restaurant-faves.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orders: Order[] = [];

  constructor(private service: RestaurantFavesService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders = (): void => {
    this.service.getOrders().subscribe((data: Order[]) => this.orders = data);
  }

  removeOrder = (id: number): void => {
    this.service.deleteOrder(id).subscribe(() => this.loadOrders());
  }

  addOrder = (order: Order): void => {
    this.service.addOrder(order).subscribe(() => this.loadOrders())
  }

}
