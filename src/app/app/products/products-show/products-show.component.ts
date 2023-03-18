import { ApiStoreService } from './../../../services/api-store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { ProductInterface } from '../interfaces/product.interface';

@Component({
  selector: 'app-products-show',
  templateUrl: './products-show.component.html',
  styleUrls: ['./products-show.component.scss']
})

export class ProductsShowComponent implements OnInit {
 idProduct!: number;
 product!: ProductInterface; 
 responsiveOptions;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
  ) {
  this.idProduct = parseInt(this.activatedRoute.snapshot.paramMap.get('id')|| '')  
  
  this.responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
   }

  ngOnInit(): void {
    this.show();
  }
  
  async show() {
    this.product = await this.productService.showProduct(this.idProduct) as ProductInterface; 
   console.log("🚀 ~ file: products-show.component.ts:30 ~ ProductsShowComponent ~ show ~ this.product:", this.product)
  }

}
