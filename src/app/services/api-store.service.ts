import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiStoreService {


  constructor(
    private httpClient: HttpClient
  ) { }

  getProducts(){
  return this.httpClient.get('https://api.escuelajs.co/api/v1/products')
   
  }
}