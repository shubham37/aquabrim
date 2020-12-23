import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpAlertComponent } from './op-alert.component';

describe('OpAlertComponent', () => {
  let component: OpAlertComponent;
  let fixture: ComponentFixture<OpAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
