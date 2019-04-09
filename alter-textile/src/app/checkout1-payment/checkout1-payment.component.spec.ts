import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkout1PaymentComponent } from './checkout1-payment.component';

describe('Checkout1PaymentComponent', () => {
  let component: Checkout1PaymentComponent;
  let fixture: ComponentFixture<Checkout1PaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checkout1PaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checkout1PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
