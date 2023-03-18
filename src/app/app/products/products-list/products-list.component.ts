import { ApiStoreService } from './../../../services/api-store.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
 products:any;

  constructor(
    private router: Router,
    private apiStoreService : ApiStoreService
  ){}

  ngOnInit(): void {
      this.listProducts();
  }

  listProducts(){
    this.apiStoreService.getProducts().subscribe({
      next: (response) => {
        this.products = response;
        console.log("🚀 ~ file: products-list.component.ts:23 ~ ProductsListComponent ~ this.apiStoreService.getProducts ~ this.products:", this.products)
        
      }
    }
      
    )
  }

  show(id: number){
 this.router.navigate(['products/show' + id])
  }

}
