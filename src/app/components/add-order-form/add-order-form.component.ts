import { Component, EventEmitter, Output } from '@angular/core';
import { Order } from '../../models/order';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-order-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-order-form.component.html',
  styleUrl: './add-order-form.component.css'
})
export class AddOrderFormComponent {

  formOrder:Order = {} as Order;
  @Output() addEvent = new EventEmitter<Order>();

  emitAdd(){
    let newOrder:Order = {...this.formOrder};
    newOrder.orderAgain = true;
    console.log(newOrder)
    this.addEvent.emit(newOrder);
  }

}
