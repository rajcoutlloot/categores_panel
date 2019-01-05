import { TestBed } from '@angular/core/testing';

import { TempCatserviceService } from './temp-catservice.service';

describe('TempCatserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempCatserviceService = TestBed.get(TempCatserviceService);
    expect(service).toBeTruthy();
  });
});
