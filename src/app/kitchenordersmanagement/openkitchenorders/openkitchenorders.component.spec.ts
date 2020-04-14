import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenkitchenordersComponent } from './openkitchenorders.component';

describe('OpenkitchenordersComponent', () => {
  let component: OpenkitchenordersComponent;
  let fixture: ComponentFixture<OpenkitchenordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenkitchenordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenkitchenordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
