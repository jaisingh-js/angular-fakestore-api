import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent {
  item?: IProduct;
  @Input() index!: number;


  constructor(private cartService: CartService) { }
  
  ngOnInit() {
    this.item = this.cartService.getProductByIndex(this.index);
  }

  removeElement(index: number) {
    this.cartService.removeItemFromCart(index);
  }
}
