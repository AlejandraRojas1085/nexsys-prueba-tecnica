import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsShowComponent } from './products-show/products-show.component';
import { PrimengModule } from 'src/app/shared/widget/primeng/primeng.module';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsShowComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimengModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule  
  ]
})
export class ProductsModule { }
