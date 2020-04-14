import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmitemdeleteComponent } from './confirmitemdelete.component';

describe('ConfirmitemdeleteComponent', () => {
  let component: ConfirmitemdeleteComponent;
  let fixture: ComponentFixture<ConfirmitemdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmitemdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmitemdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
