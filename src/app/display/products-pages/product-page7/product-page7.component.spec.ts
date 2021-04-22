import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPage7Component } from './product-page7.component';

describe('ProductPage7Component', () => {
  let component: ProductPage7Component;
  let fixture: ComponentFixture<ProductPage7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPage7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPage7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
