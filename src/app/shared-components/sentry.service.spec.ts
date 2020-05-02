import { TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { SentryErrorHandler } from './sentry.service';

describe('SentryService', () => {
  let service: SentryErrorHandler;

  beforeEach(() => {
    environment.production = true;
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentryErrorHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('through error', () => {
    expect(function () {
      service.handleError('error');
    }).toThrow();
  })
});
