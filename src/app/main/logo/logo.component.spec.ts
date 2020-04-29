import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LogoComponent } from './logo.component';
import { ThemeService } from 'src/app/theme';
import { THEMES, ACTIVE_THEME } from 'src/app/theme/symbols';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        ThemeService,
        { provide: THEMES, useValue: THEMES },
        { provide: ACTIVE_THEME, useValue: ACTIVE_THEME },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
