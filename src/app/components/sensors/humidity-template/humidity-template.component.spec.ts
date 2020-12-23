import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityTemplateComponent } from './humidity-template.component';

describe('HumidityTemplateComponent', () => {
  let component: HumidityTemplateComponent;
  let fixture: ComponentFixture<HumidityTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumidityTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumidityTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
