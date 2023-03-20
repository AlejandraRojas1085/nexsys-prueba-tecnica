import { Message } from 'primeng/api';
import { ProductsListComponent } from './../app/products/products-list/products-list.component';
import { Product } from './../demo/api/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  /*  filterByPrice(Product; arr) {
     const price: number = parseInt((event.target as HTMLInputElement).value);
 
     if (price) {
       const resultFind: Array<any> = [];
 
       const find = this.products.find(element => element.price === price)
       resultFind.push(find)
 
       this.products = resultFind
     } else {
       this.products
     }
   } */

  filterByCategory(idCategory: number, products: Array<any>) {

    return new Promise((resolve, reject) => {
      try {  
        const filter = products.filter(element => element.category.id == idCategory);
        if (filter) {         
          resolve(filter)          
        }   

      } catch (error) {
        reject(error)
      }
    })
  }
}
