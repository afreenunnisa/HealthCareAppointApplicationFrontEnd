import { TestBed } from '@angular/core/testing';

import { DiagnosticTestService } from './diagnostic-test.service';

describe('DiagnosticTestService', () => {
  let service: DiagnosticTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnosticTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
