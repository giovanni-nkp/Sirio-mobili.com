import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPage3Component } from './product-page3.component';

describe('ProductPage3Component', () => {
  let component: ProductPage3Component;
  let fixture: ComponentFixture<ProductPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPage3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
