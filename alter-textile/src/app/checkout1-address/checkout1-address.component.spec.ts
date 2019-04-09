import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkout1AddressComponent } from './checkout1-address.component';

describe('Checkout1AddressComponent', () => {
  let component: Checkout1AddressComponent;
  let fixture: ComponentFixture<Checkout1AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checkout1AddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checkout1AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
