import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltDetailTemplateComponent } from './volt-detail-template.component';

describe('VoltDetailTemplateComponent', () => {
  let component: VoltDetailTemplateComponent;
  let fixture: ComponentFixture<VoltDetailTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoltDetailTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoltDetailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
