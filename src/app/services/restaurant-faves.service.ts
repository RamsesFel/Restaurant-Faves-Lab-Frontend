import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class RestaurantFavesService {

  constructor(private http:HttpClient) { };

  url:string= "https://localhost:7276";

  getAll(restaurant?:string, orderAgain?:Boolean):Observable<Order[]>{
    if(restaurant != null && orderAgain != null){
      return this.http.get<Order[]>(`${this.url}/api/Order?restaurant=${restaurant}&orderAgain=${orderAgain}`);
    }else if(restaurant != null){
      return this.http.get<Order[]>(`${this.url}/api/Order?restaurant=${restaurant}`);
    }else if(orderAgain != null){
      return this.http.get<Order[]>(`${this.url}/api/Order?orderAgain=${orderAgain}`);
    }else{
      return this.http.get<Order[]>(`${this.url}/api/Order`);
    }
  }

  getById(id:number):Observable<Order>{
    return this.http.get<Order>(`${this.url}/api/Order/${id}`);
  }

  AddOrder(newOrder:Order):Observable<Order>{
    console.log(newOrder)
    return this.http.post<Order>(`${this.url}/api/Order`, newOrder);
  }

  deleteOrder(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/api/Order/${id}`);
  }

  updateOrder(updatedOrder:Order):Observable<void>{
    return this.http.put<void>(`${this.url}/api/Order/${updatedOrder.id}`, updatedOrder);
  }
}
