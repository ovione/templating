import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesUsageComponent } from './templates-usage.component';

describe('TemplatesUsageComponent', () => {
  let component: TemplatesUsageComponent;
  let fixture: ComponentFixture<TemplatesUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatesUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatesUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
