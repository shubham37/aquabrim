import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterDetailTemplateComponent } from './water-detail-template.component';

describe('WaterDetailTemplateComponent', () => {
  let component: WaterDetailTemplateComponent;
  let fixture: ComponentFixture<WaterDetailTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterDetailTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterDetailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
