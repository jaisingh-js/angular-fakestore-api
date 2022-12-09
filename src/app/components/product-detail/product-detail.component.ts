import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product?: IProduct;
  productId: string = '';

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }
  
  ngOnInit() {
    this.route.params.subscribe((param) => this.productId = param['id']);
    this.productService.getProduct(this.productId).subscribe((product) => (this.product = product));
  }

  addToCart() {
    if (this.product) {
      // console.log("....")
      this.cartService.addTocart(this.product);
    }
  }
}
