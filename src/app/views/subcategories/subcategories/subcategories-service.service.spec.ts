import { TestBed } from '@angular/core/testing';

import { SubcategoriesServiceService } from './subcategories-service.service';

describe('SubcategoriesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubcategoriesServiceService = TestBed.get(SubcategoriesServiceService);
    expect(service).toBeTruthy();
  });
});
