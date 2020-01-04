import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Product } from 'src/Models/product.model';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() inputProduct:Product;

  @Output() onSelected:EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  selectProduct(){
    console.log('[In Child] Product Selected '+this.inputProduct.name);

      if(this.onSelected){
        this.onSelected.emit(this.inputProduct);
      }

  }

}
