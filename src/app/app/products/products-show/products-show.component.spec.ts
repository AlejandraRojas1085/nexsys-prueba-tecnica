import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from "@angular/router/testing";

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductsShowComponent } from './products-show.component';

describe('ProductsShowComponent', () => {
  let component: ProductsShowComponent;
  let fixture: ComponentFixture<ProductsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ 
        HttpClientTestingModule,
        RouterTestingModule
       ],
      declarations: [ ProductsShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
