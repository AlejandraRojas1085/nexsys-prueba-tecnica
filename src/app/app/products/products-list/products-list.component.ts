import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PrimeNGConfig, SelectItem } from 'primeng/api';

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

  products:ProductInterface[] = [];
  sortOptions!: SelectItem[];
  sortOrder!: number;
  sortField!: string;

  minimum = new FormControl(null, [Validators.required]);
  maximum = new FormControl(null, [Validators.required]);

  filters!: filter[];
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
    this.products = await this.productService.listProducts() as Array<ProductInterface>;

    this.primengConfig.ripple = true;

    this.filters = [
      { value: 'price', name: 'Price' },
      { value: 'category', name: 'Category' }
    ];

    this.categoriesProducts();
  }

  show(id: number) {
    this.router.navigate([`/show/${id}`]);
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

    const category = this.products.reduce((acc:category[], product) => {      
      if (!setObj.has(product.category.id)) {
        setObj.add(product.category.id)
        acc.push(product.category)
      } 
      return acc;
    }, []);

    this.categories = category;
  }

  async getFilterByPriceRange() {
    if (this.maximum.value && this.minimum.value) {
      this.products = await this.filterService.filterPriceRange(parseInt(this.minimum.value), parseInt(this.maximum.value)) as Array<ProductInterface>;
    }else{
      this.products;
    }
  }

  async getFilterByCategory() {
    if (this.selectedCategory) {
      this.products = await this.filterService.filterCategory(this.selectedCategory.id) as Array<ProductInterface>;
    } else {
      this.products;
    }
  }
}
