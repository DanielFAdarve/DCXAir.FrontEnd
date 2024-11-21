import { TestBed } from '@angular/core/testing';

import { FligthsService } from './fligths.service';

describe('FligthsService', () => {
  let service: FligthsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FligthsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
