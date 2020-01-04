import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Product } from 'src/Models/product.model';
import { ProductService } from '../Services/product.service';


@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product = new Product();

  @Output() onAdded: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  save(){
    this.productService.add(this.product).subscribe(p=>{
      if(this.onAdded){
        this.onAdded.emit(p);
      }
    })
  }

}
