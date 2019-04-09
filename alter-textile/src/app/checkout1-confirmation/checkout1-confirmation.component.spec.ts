import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkout1ConfirmationComponent } from './checkout1-confirmation.component';

describe('Checkout1ConfirmationComponent', () => {
  let component: Checkout1ConfirmationComponent;
  let fixture: ComponentFixture<Checkout1ConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checkout1ConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checkout1ConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
