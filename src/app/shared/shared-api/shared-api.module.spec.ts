import { SharedApiModule } from './shared-api.module';

describe('SharedApiModule', () => {
  let sharedApiModule: SharedApiModule;

  beforeEach(() => {
    sharedApiModule = new SharedApiModule();
  });

  it('should create an instance', () => {
    expect(sharedApiModule).toBeTruthy();
  });
});
