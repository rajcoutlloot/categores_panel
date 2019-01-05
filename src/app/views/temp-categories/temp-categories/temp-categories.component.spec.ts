import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCategoriesComponent } from './temp-categories.component';

describe('TempCategoriesComponent', () => {
  let component: TempCategoriesComponent;
  let fixture: ComponentFixture<TempCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
