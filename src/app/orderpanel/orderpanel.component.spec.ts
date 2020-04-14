import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpanelComponent } from './orderpanel.component';

describe('OrderpanelComponent', () => {
  let component: OrderpanelComponent;
  let fixture: ComponentFixture<OrderpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
