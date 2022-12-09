import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product?: IProduct;
  productId: string = '';

  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  
  ngOnInit() {
    this.route.params.subscribe((param) => this.productId = param['id']);
    this.productService.getProduct(this.productId).subscribe((product) => (this.product = product));
  }
}
