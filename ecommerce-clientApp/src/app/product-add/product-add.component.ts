import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Product } from 'src/Models/product.model';
import { ProductService } from '../Services/product.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

 // product: Product = new Product();
 myForm:FormGroup  =this.fb.group({
   name: ['',Validators.required],
   code: [''],
   price: ['']
 });

 priceNumberError: boolean = false;


  @Output() onAdded: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private productService: ProductService, private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm.get('price').valueChanges.subscribe(c=>
      {
        this.priceNumberError = isNaN(c);
        console.log(c);
      
      })
  }

  save(product: Product){
    console.log('product submitted: '+JSON.stringify(product));
    this.productService.add(product).subscribe(p=>{
      if(this.onAdded){
        this.onAdded.emit(p);
      }
    })
  };



  


  update(){
    this.myForm.patchValue({
      name:"MacBook Pro",
      code:"Mac 001"
      
    });
  }

 

}
