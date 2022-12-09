import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = environment.apiUrl + 'products';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.apiUrl);
  }

  getProduct(id: string): Observable<IProduct>{
    return this.http.get<IProduct>(this.apiUrl + '/' +id)
  }
}
