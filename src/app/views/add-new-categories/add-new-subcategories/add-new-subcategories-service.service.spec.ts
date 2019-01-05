import { TestBed } from '@angular/core/testing';

import { AddNewSubcategoriesServiceService } from './add-new-subcategories-service.service';

describe('AddNewSubcategoriesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddNewSubcategoriesServiceService = TestBed.get(AddNewSubcategoriesServiceService);
    expect(service).toBeTruthy();
  });
});
