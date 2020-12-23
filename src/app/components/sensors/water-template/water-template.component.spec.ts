import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterTemplateComponent } from './water-template.component';

describe('WaterTemplateComponent', () => {
  let component: WaterTemplateComponent;
  let fixture: ComponentFixture<WaterTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
