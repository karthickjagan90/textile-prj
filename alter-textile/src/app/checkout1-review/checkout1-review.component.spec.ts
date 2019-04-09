import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkout1ReviewComponent } from './checkout1-review.component';

describe('Checkout1ReviewComponent', () => {
  let component: Checkout1ReviewComponent;
  let fixture: ComponentFixture<Checkout1ReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checkout1ReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checkout1ReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
