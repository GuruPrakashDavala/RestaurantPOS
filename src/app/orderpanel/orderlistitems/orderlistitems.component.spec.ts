import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlistitemsComponent } from './orderlistitems.component';

describe('OrderlistitemsComponent', () => {
  let component: OrderlistitemsComponent;
  let fixture: ComponentFixture<OrderlistitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderlistitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderlistitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
