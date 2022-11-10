import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Order } from './interfaces/Order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantFavesService {

  backendUrl: string = 'https://localhost:7066/api';

  constructor(private httpClient: HttpClient) { }

  getOrders = (): Observable<Order[]> => {
    return this.httpClient.get<Order[]>(`${this.backendUrl}/orders`);
  }

  addOrder = (order: Order): Observable<Order> => {
    return this.httpClient.post<Order>(`${this.backendUrl}/orders`, order);
  }

  deleteOrder = (id: number): Observable<void> => {
    return this.httpClient.delete<void>(`${this.backendUrl}/orders/${id}`);
  }
}
