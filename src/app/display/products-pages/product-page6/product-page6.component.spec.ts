import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPage6Component } from './product-page6.component';

describe('ProductPage6Component', () => {
  let component: ProductPage6Component;
  let fixture: ComponentFixture<ProductPage6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPage6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPage6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
