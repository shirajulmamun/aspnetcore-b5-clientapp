import { Injectable } from '@angular/core';
import { Product } from 'src/Models/product.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = "https://localhost:44301/api/products"

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 

  }

  

  getAll():Observable<Product[]> {
    console.log('service ');
      return  this.http.get<Product[]>(apiUrl);
  }

  add(product: Product):Observable<Product>{
    return this.http.post<Product>(apiUrl,product,httpOptions);
  }
}
