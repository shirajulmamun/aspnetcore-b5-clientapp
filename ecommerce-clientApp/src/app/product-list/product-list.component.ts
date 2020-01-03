import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Models/product.model';
import { PRODUCTS } from 'src/Models/ProductList';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];
  title:string = "Product List";

  constructor() { 

  }

  ngOnInit() {
    this.productList = PRODUCTS;
  }

}
