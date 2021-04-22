import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanapesComponent } from './canapes.component';

describe('CanapesComponent', () => {
  let component: CanapesComponent;
  let fixture: ComponentFixture<CanapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanapesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
