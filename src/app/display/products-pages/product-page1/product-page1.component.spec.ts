import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPage1Component } from './product-page1.component';

describe('ProductPage1Component', () => {
  let component: ProductPage1Component;
  let fixture: ComponentFixture<ProductPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
