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
}
