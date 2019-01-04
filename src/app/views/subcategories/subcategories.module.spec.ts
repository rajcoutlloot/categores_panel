import { SubcategoriesModule } from './subcategories.module';

describe('SubcategoriesModule', () => {
  let subcategoriesModule: SubcategoriesModule;

  beforeEach(() => {
    subcategoriesModule = new SubcategoriesModule();
  });

  it('should create an instance', () => {
    expect(subcategoriesModule).toBeTruthy();
  });
});
