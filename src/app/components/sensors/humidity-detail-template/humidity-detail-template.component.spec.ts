import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityDetailTemplateComponent } from './humidity-detail-template.component';

describe('HumidityDetailTemplateComponent', () => {
  let component: HumidityDetailTemplateComponent;
  let fixture: ComponentFixture<HumidityDetailTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumidityDetailTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumidityDetailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
