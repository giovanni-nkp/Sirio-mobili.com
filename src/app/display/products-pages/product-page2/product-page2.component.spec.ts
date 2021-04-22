import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPage2Component } from './product-page2.component';

describe('ProductPage2Component', () => {
  let component: ProductPage2Component;
  let fixture: ComponentFixture<ProductPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
