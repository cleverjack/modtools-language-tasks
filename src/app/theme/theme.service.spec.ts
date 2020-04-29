import { TestBed } from '@angular/core/testing';

import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from './theme.service';
import { THEMES, ACTIVE_THEME } from './symbols';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ 
        ThemeService,
        { provide: THEMES, useValue: THEMES },
        { provide: ACTIVE_THEME, useValue: ACTIVE_THEME },
      ]
    });
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
