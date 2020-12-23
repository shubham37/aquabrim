import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDetailTemplateComponent } from './current-detail-template.component';

describe('CurrentDetailTemplateComponent', () => {
  let component: CurrentDetailTemplateComponent;
  let fixture: ComponentFixture<CurrentDetailTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentDetailTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentDetailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
