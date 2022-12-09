import { Injectable } from '@angular/core';
import { ICart } from '../interfaces/icart';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartData: ICart = {
    products: [],
    total: 0,
    quantity: 0
  };

  constructor() { }

  addTocart(product: IProduct) {
    this.cartData.products.push(product);
    this.cartData.quantity += 1;
    this.cartData.total += product.price;
    this.cartData.total.toFixed(2)
  }

  getCart() {
    return this.cartData;
  }

  removeItemFromCart(index: number) {
    const items = this.cartData.products.splice(index, 1);
    for (let item of items) {
      this.cartData.total -= item.price;
    }
    this.cartData.quantity -= 1;
  }

  getProductByIndex(index: number) {
    return this.cartData.products[index];
  }
}
