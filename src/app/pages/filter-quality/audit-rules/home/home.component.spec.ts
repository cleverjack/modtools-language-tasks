import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditRulesHomeComponent } from './home.component';

describe('AuditRulesHomeComponent', () => {
  let component: AuditRulesHomeComponent;
  let fixture: ComponentFixture<AuditRulesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditRulesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditRulesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
