import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkout1DeliveryComponent } from './checkout1-delivery.component';

describe('Checkout1DeliveryComponent', () => {
  let component: Checkout1DeliveryComponent;
  let fixture: ComponentFixture<Checkout1DeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checkout1DeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checkout1DeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
