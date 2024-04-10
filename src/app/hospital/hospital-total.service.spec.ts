import { TestBed } from '@angular/core/testing';

import { HospitalTotalService } from './hospital-total.service';

describe('HospitalTotalService', () => {
  let service: HospitalTotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalTotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
