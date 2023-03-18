import { ApiStoreService } from './../../../services/api-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-show',
  templateUrl: './products-show.component.html',
  styleUrls: ['./products-show.component.scss']
})

export class ProductsShowComponent implements OnInit {

  constructor(
    private apiStoreService: ApiStoreService
  ){}

  ngOnInit(): void {
      
  }

}
