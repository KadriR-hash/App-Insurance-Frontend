import { TestBed } from '@angular/core/testing';

import { EnrollementService } from './enrollement.service';

describe('EnrollementService', () => {
  let service: EnrollementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
