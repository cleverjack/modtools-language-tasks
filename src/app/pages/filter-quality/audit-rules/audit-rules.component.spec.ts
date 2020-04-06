import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditRulesComponent } from './audit-rules.component';

describe('AuditRulesComponent', () => {
  let component: AuditRulesComponent;
  let fixture: ComponentFixture<AuditRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
