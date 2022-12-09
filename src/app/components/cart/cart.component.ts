import { Component } from '@angular/core';
import { ICart } from 'src/app/interfaces/icart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart?: ICart;

  constructor(private cartService: CartService) { }
  
  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

}
