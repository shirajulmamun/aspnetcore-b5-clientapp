import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/Models/product.model';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() inputProduct:Product;

  constructor() { }

  ngOnInit() {
  }

}
