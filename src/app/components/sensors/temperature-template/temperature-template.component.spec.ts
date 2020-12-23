import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureTemplateComponent } from './temperature-template.component';

describe('TemperatureTemplateComponent', () => {
  let component: TemperatureTemplateComponent;
  let fixture: ComponentFixture<TemperatureTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
