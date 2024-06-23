import { Component } from '@angular/core';
import { AddOrderFormComponent } from '../add-order-form/add-order-form.component';
import { RestaurantFavesService } from '../../services/restaurant-faves.service';
import { Order } from '../../models/order';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [AddOrderFormComponent,FormsModule],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent {
  constructor(private _restaurantService:RestaurantFavesService) {};
  allOrders:Order[] = [];

ngOnInit(){
  this.getOrders();
}

getOrders(){
  this._restaurantService.getAll().subscribe((response)=>{
    console.log(response);
    this.allOrders = response;
  })
}

deleteOrder(o:Order){
  this._restaurantService.deleteOrder(o.id).subscribe((response)=> this.getOrders());
}

addOrder(o:Order){
  this._restaurantService.AddOrder(o).subscribe((response)=> this.getOrders());
}
}
