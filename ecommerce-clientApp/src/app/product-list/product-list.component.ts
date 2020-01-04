import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Models/product.model';
import { PRODUCTS } from 'src/Models/ProductList';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];
  selectedProduct: Product;
  title:string = "Product List";

  constructor(private productService: ProductService) { 

  }

  ngOnInit() {

    this.productService.getAll().subscribe(products=>{
      this.productList = products;
    })
    
  }

  selectProductForProductList(product: Product){

    this.selectedProduct = product;

  }

  newProductAdded(product: Product){
    this.productList.push(product);
  }

}
