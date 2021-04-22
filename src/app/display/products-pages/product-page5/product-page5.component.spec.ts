import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPage5Component } from './product-page5.component';

describe('ProductPage5Component', () => {
  let component: ProductPage5Component;
  let fixture: ComponentFixture<ProductPage5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPage5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
