import { TestBed } from '@angular/core/testing';

import { AttributesServiceService } from './attributes-service.service';

describe('AttributesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttributesServiceService = TestBed.get(AttributesServiceService);
    expect(service).toBeTruthy();
  });
});
