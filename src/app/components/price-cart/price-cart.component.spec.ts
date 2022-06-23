import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCartComponent } from './price-cart.component';

describe('PriceCartComponent', () => {
  let component: PriceCartComponent;
  let fixture: ComponentFixture<PriceCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
