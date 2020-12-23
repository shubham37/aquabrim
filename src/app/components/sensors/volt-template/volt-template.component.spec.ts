import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltTemplateComponent } from './volt-template.component';

describe('VoltTemplateComponent', () => {
  let component: VoltTemplateComponent;
  let fixture: ComponentFixture<VoltTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoltTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoltTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
