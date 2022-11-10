import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Order } from '../interfaces/Order';


@Component({
  selector: 'app-add-order-form',
  templateUrl: './add-order-form.component.html',
  styleUrls: ['./add-order-form.component.css']
})


export class AddOrderFormComponent implements OnInit {

  @Output() orderSave = new EventEmitter<Order>();

  description: string = '';
  restaurant: string = '';
  rating: number = 1;
  orderAgain: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  submit = (): void => {
    this.orderSave.emit({
      description: this.description,
      restaurant: this.restaurant,
      rating: this.rating,
      orderAgain: this.orderAgain,
    });
    this.description = '';
    this.restaurant = '';
    this.rating = 1;
    this.orderAgain = false;
  };

}
