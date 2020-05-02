import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { UserService } from './user.service';
import { UserPreferences } from './user';
import { DefaultLanguage, DefaultClient } from 'src/constants';

describe('UserService', () => {
  
  let httpClient:HttpClient;
  let httpTestingController:HttpTestingController;
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get prefs', () => {
    let defaultPrefs: UserPreferences = {
      language: DefaultLanguage,
      lastClientId: DefaultClient
    };

    service.prefs = defaultPrefs;
    expect(service.preferences).toBeTruthy();
  });

  it('get prefs', () => {
    let defaultPrefs: UserPreferences = {
      language: DefaultLanguage,
      lastClientId: DefaultClient
    };

    service.preferences = defaultPrefs;
    expect(service.preferences).toBeTruthy();
  });
});
