import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsShowComponent } from './products-show.component';

describe('ProductsShowComponent', () => {
  let component: ProductsShowComponent;
  let fixture: ComponentFixture<ProductsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
