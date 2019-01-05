import { AddNewCategoriesModule } from './add-new-categories.module';

describe('AddNewCategoriesModule', () => {
  let addNewCategoriesModule: AddNewCategoriesModule;

  beforeEach(() => {
    addNewCategoriesModule = new AddNewCategoriesModule();
  });

  it('should create an instance', () => {
    expect(addNewCategoriesModule).toBeTruthy();
  });
});
