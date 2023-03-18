import { ApiStoreService } from './api-store.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private apiStoreService: ApiStoreService
  ) { }

  listProducts() {
    return new Promise((resolve, reject) => {
      this.apiStoreService.getAllProducts().subscribe({
        next: (response) => {
          resolve(response);
        },
        error: (error) => {
          reject(error);
        }
      });
    })
  }

  showProduct(id: number) {
    return new Promise((resolve, reject) => {
      this.apiStoreService.getSingleProduct(id).subscribe({
        next: (response) => {
          resolve(response);
        },
        error: (error) => {
          reject(error);
        }
      });
    })
  }


}
