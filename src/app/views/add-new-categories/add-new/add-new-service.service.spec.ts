import { TestBed } from '@angular/core/testing';

import { AddNewServiceService } from './add-new-service.service';

describe('AddNewServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddNewServiceService = TestBed.get(AddNewServiceService);
    expect(service).toBeTruthy();
  });
});
