import { Message, PrimeNGConfig } from 'primeng/api';
import { ProductsListComponent } from './../app/products/products-list/products-list.component';
import { Product } from './../demo/api/product';
import { Injectable } from '@angular/core';
import { ApiStoreService } from './api-store.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(
    private apiStoreService: ApiStoreService
  ) { }

  filterPriceRange(minimum: number, maximum: number) {
    return new Promise((resolve, reject) => {
      try {
        this.apiStoreService.filterByPriceRange(minimum, maximum).subscribe({
          next: (response) => {
            resolve(response);
          },
          error: (error) => {
            reject(error);
          }
        });
      } catch (error) {
        reject(error)
      }
    })
  }

  filterCategory(category: number) {
    return new Promise((resolve, reject) => {
      try {
        this.apiStoreService.filterByCategory(category).subscribe({
          next: (response) => {
            resolve(response);
          },
          error: (error) => {
            reject(error);
          }
        });
      } catch (error) {
        reject(error)
      }
    })
  }

}
