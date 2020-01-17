import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './Services/product.service';
import { ProductAddComponent } from './product-add/product-add.component';
import {RouterModule} from '@angular/router'

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
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(
        [
          {path:'products', component:ProductListComponent , 
            children:[
              {path:'add', component:ProductAddComponent},
              {path:'product', component:ProductComponent, }
            ]
        },    

       {path:'', redirectTo:'products', pathMatch:'full'},
        ]
          

      )
    ],
    providers: [ProductService],
    bootstrap: [AppComponent]
  }
)
export class AppModule { 


}
