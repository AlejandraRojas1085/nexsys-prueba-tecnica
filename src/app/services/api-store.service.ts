import { ProductInterface } from './../app/products/interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiStoreService {


  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProducts(){
  return this.httpClient.get<ProductInterface>('https://api.escuelajs.co/api/v1/products');
  }

  getSingleProduct(id: number){
    return this.httpClient.get<ProductInterface>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }

  filterByPriceRange(minimum: number, maximum:number){
    return this.httpClient.get<ProductInterface>(`https://api.escuelajs.co/api/v1/products/?price_min=${minimum}&price_max=${maximum}`)
  }

  filterByCategory(idCategory: number){
return this.httpClient.get<ProductInterface>(`https://api.escuelajs.co/api/v1/products/?categoryId=${idCategory}`)
  }
}
