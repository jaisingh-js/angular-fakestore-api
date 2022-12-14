import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    NavbarComponent,
    CartComponent,
    CartProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
