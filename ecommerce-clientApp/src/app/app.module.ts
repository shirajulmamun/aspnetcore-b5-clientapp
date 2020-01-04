import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './Services/product.service';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule(
  {
    declarations: [
      AppComponent,
      ProductListComponent,
      ProductComponent,
      ProductAddComponent
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
    ],
    providers: [ProductService],
    bootstrap: [AppComponent]
  }
)
export class AppModule { 


}
