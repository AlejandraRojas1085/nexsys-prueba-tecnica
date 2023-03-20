import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { elementAt } from 'rxjs';
import { FilterService } from 'src/app/services/filter.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductInterface } from '../interfaces/product.interface';

interface filter {
  name: string,
  value: string
}
interface category {
  id: number,
  image: string,
  name: string,
  creationAt: string,
  updateAt: string
}


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @ViewChild('dataview') dataView!: DataView;
  products: Array<any> = [];

  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  minimum = new FormControl(" ");
  maximum = new FormControl(" ");

  filters!: filter[]
  selectedFilter!: filter;

  categories!: category[];
  selectedCategory!: category;

  loading = [false, false, false, false]

  load(index: number) {
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
  }

  constructor(
    private router: Router,
    private productService: ProductService,
    private filterService: FilterService,
    private primengConfig: PrimeNGConfig
  ) { }

  async ngOnInit() {
    this.products = await this.productService.listProducts() as Array<any>;

    this.primengConfig.ripple = true;

    this.filters = [
      { value: 'price', name: 'Price' },
      { value: 'category', name: 'Category' }
    ];

    this.categoriesProducts()
  }

  show(id: number) {
    this.router.navigate([`products/show/${id}`]);
  }

  onSortChange(event: any) {
    let value = event.value;
    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  categoriesProducts() {
    const setObj = new Set();

    const category = this.products.reduce((acc, product) => {
      if (!setObj.has(product.category.id)) {
        setObj.add(product.category.id)
        acc.push(product.category)
      }
      return acc;
    }, []);

    this.categories = category;
  }

  getfilterByPrice() {
    if (this.maximum.value && this.minimum.value) {
      console.log(this.maximum.value, this.minimum.value);


    }
  }

  async getFilterByCategory() {

    if (this.selectedCategory) {

      this.products = await this.filterService.filterByCategory(this.selectedCategory.id, this.products) as Array<any>

      console.log(this.products);

    } else {
      this.products
    }

  }



}
