import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    PrimengModule
  ]
})
export class ProductsModule { }
