import { TempCategoriesModule } from './temp-categories.module';

describe('TempCategoriesModule', () => {
  let tempCategoriesModule: TempCategoriesModule;

  beforeEach(() => {
    tempCategoriesModule = new TempCategoriesModule();
  });

  it('should create an instance', () => {
    expect(tempCategoriesModule).toBeTruthy();
  });
});
