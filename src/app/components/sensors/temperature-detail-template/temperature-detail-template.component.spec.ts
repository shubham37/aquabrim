import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureDetailTemplateComponent } from './temperature-detail-template.component';

describe('TemperatureDetailTemplateComponent', () => {
  let component: TemperatureDetailTemplateComponent;
  let fixture: ComponentFixture<TemperatureDetailTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureDetailTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureDetailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
