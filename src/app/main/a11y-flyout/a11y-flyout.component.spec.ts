import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { A11yFlyoutComponent } from './a11y-flyout.component';
import { ThemeService } from 'src/app/theme';
import { THEMES, ACTIVE_THEME } from 'src/app/theme/symbols';

describe('A11yPickerComponent', () => {
  let component: A11yFlyoutComponent;
  let fixture: ComponentFixture<A11yFlyoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A11yFlyoutComponent ],
      providers: [
        ThemeService,
        { provide: THEMES, useValue: THEMES },
        { provide: ACTIVE_THEME, useValue: ACTIVE_THEME },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A11yFlyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(inject([ThemeService], (themeService: ThemeService) => {
    expect(component).toBeTruthy();
  })));
});
