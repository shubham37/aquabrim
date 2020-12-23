import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressureDetailTemplateComponent } from './pressure-detail-template.component';

describe('PressureDetailTemplateComponent', () => {
  let component: PressureDetailTemplateComponent;
  let fixture: ComponentFixture<PressureDetailTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressureDetailTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressureDetailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
