import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSubcategoriesComponent } from './add-new-subcategories.component';

describe('AddNewSubcategoriesComponent', () => {
  let component: AddNewSubcategoriesComponent;
  let fixture: ComponentFixture<AddNewSubcategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewSubcategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewSubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
