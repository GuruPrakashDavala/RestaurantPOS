import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenordersmanagementComponent } from './kitchenordersmanagement.component';

describe('KitchenordersmanagementComponent', () => {
  let component: KitchenordersmanagementComponent;
  let fixture: ComponentFixture<KitchenordersmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenordersmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenordersmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
