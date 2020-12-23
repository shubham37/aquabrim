import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressureTemplateComponent } from './pressure-template.component';

describe('PressureTemplateComponent', () => {
  let component: PressureTemplateComponent;
  let fixture: ComponentFixture<PressureTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressureTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressureTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
