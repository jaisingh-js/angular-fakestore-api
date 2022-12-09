import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products?: IProduct[];

  constructor(private productService: ProductService, private router: Router) { }
  
  ngOnInit() {
    this.productService.getAllProducts().subscribe((products) => (this.products = products));
  }
}
